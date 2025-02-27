import { HTTP_REGEX_MULTI } from "@vendetta/constants";
import { findByStoreName } from "@vendetta/metro";
import { ReactNative as RN, stylesheet } from "@vendetta/metro/common";
import { useProxy } from "@vendetta/storage";
import { semanticColors } from "@vendetta/ui";
import { showInputAlert } from "@vendetta/ui/alerts";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { Forms, General } from "@vendetta/ui/components";
import { showToast } from "@vendetta/ui/toasts";

import {
  BetterTableRowGroup,
  openSheet,
  SimpleText,
} from "../../../../stuff/types";
import { cache, vstorage } from "..";
import { currentAuthorization, deleteSaveData } from "../stuff/api";
import { check } from "../stuff/http";
import { openOauth2Modal } from "../stuff/oauth2";
import { validateSong } from "../stuff/songs";
import { rebuildLink } from "../stuff/util";
import { API } from "../types/api";
import PendingSongName from "./PendingSongName";
import SongInfoSheet from "./sheets/SongInfoSheet";

const { ScrollView, View } = General;
const { FormRow } = Forms;

const UserStore = findByStoreName("UserStore");

export default function () {
  useProxy(cache);
  useProxy(vstorage);
  check();

  const styles = stylesheet.createThemedStyleSheet({
    song: {
      backgroundColor: semanticColors.BG_MOD_FAINT,
      borderRadius: 8,
    },
    serviceFrame: {
      height: 24,
      width: 24,
      backgroundColor: semanticColors.BG_MOD_FAINT,
      borderRadius: 2147483647,
    },
  });

  const isAuthed = !!currentAuthorization();
  const hasData = !!cache.data;

  return (
    <ScrollView>
      <BetterTableRowGroup
        title="Songs"
        icon={getAssetIDByName("abc")}
        padding={true}
      >
        {isAuthed && hasData ? (
          <View
            style={{
              flexDirection: "column",
              gap: 8,
            }}
          >
            {cache.data.songs.map((x, i) => (
              <FormRow
                label={
                  x === null ? (
                    "Press to add song in this position"
                  ) : (
                    <PendingSongName
                      service={x.service}
                      type={x.type}
                      id={x.id}
                      normal={true}
                    />
                  )
                }
                leading={
                  x === null ? (
                    <View style={styles.serviceFrame} />
                  ) : (
                    <RN.Image
                      style={styles.serviceFrame}
                      source={getAssetIDByName(
                        "img_account_sync_spotify_light_and_dark",
                      )}
                    />
                  )
                }
                onLongPress={() =>
                  x &&
                  openSheet(SongInfoSheet, {
                    song: x,
                    remove: () => (cache.data.songs[i] = null),
                  })
                }
                onPress={() =>
                  showInputAlert({
                    title: "Add song",
                    placeholder: [
                      "https://open.spotify.com/track/ABC",
                      "https://open.spotify.com/album/ABC",
                      "https://open.spotify.com/playlist/ABC",
                      "https://spotify.link/ABC",
                    ].sort(() => (Math.random() > 0.5 ? 1 : -1))[0],
                    initialValue: x && rebuildLink(x.service, x.type, x.id),
                    cancelText: "Cancel",
                    confirmText: "Save",
                    onConfirm: async (val) => {
                      const url = val.match(HTTP_REGEX_MULTI)?.[0];
                      if (!url) throw new Error("Invalid link!");

                      let base = new URL(url);
                      let host = base.hostname;

                      let service: API.Song["service"],
                        type: API.Song["type"],
                        id: string;

                      if (host === "spotify.link") {
                        service = "spotify";

                        base = new URL((await fetch(url)).url);
                        host = base.hostname;
                      }
                      if (host === "open.spotify.com") {
                        service = "spotify";

                        const [_, _type, _id] = base.pathname.split("/");
                        if (
                          ["album", "track", "playlist"].includes(_type) &&
                          _id
                        ) {
                          type = _type as typeof type;
                          id = _id;
                        }
                      }

                      if (!service || !type || !id)
                        throw new Error("Missing service, type or id!");

                      if (!(await validateSong(service, type, id)))
                        throw new Error("Invalid song!");

                      cache.data.songs[i] = {
                        service,
                        type,
                        id,
                      };
                    },
                  })
                }
                style={styles.song}
              />
            ))}
          </View>
        ) : !isAuthed ? (
          <SimpleText
            variant="text-md/semibold"
            color="TEXT_NORMAL"
            align="center"
          >
            Authenticate first to manage your songs
          </SimpleText>
        ) : (
          <RN.ActivityIndicator size="small" style={{ flex: 1 }} />
        )}
      </BetterTableRowGroup>
      <BetterTableRowGroup
        title="Authentication"
        icon={getAssetIDByName("lock")}
      >
        {currentAuthorization() ? (
          <>
            <FormRow
              label="Log out"
              subLabel="Logs you out of SongSpotlight"
              leading={
                <FormRow.Icon source={getAssetIDByName("ic_logout_24px")} />
              }
              onPress={() => {
                vstorage.auth ??= {};
                delete vstorage.auth[UserStore.getCurrentUser().id];
                delete cache.data;

                showToast(
                  "Successfully logged out",
                  getAssetIDByName("ic_logout_24px"),
                );
              }}
            />
            <FormRow
              label="Delete data"
              subLabel="Deletes your SongSpotlight data"
              leading={<FormRow.Icon source={getAssetIDByName("trash")} />}
              onPress={async () => {
                await deleteSaveData();
                vstorage.auth ??= {};
                delete vstorage.auth[UserStore.getCurrentUser().id];
                delete cache.data;

                showToast(
                  "Successfully deleted data",
                  getAssetIDByName("trash"),
                );
              }}
            />
          </>
        ) : (
          <FormRow
            label="Authenticate"
            leading={<FormRow.Icon source={getAssetIDByName("copy")} />}
            trailing={FormRow.Arrow}
            onPress={openOauth2Modal}
          />
        )}
      </BetterTableRowGroup>
      <View style={{ height: 12 }} />
    </ScrollView>
  );
}
