import { Button, Forms, General } from "@vendetta/ui/components";
import { semanticColors } from "@vendetta/ui";
import { stylesheet } from "@vendetta/metro/common";
import { cache, cacheUpdated, vstorage } from "..";
import { findByProps } from "@vendetta/metro";
import { grabEverything, syncEverything } from "../stuff/syncStuff";
import { syncSaveData } from "../stuff/api";
import { showToast } from "@vendetta/ui/toasts";
import { getAssetIDByName } from "@vendetta/ui/assets";
const DeviceManager = findByProps("isTablet");

const { Text } = General;
const { FormRow } = Forms;

const { TextStyleSheet } = findByProps("TextStyleSheet");
const styles = stylesheet.createThemedStyleSheet({
  text: {
    ...TextStyleSheet["text-md/medium"],
    color: semanticColors.TEXT_NORMAL,
  },
  button: {
    ...TextStyleSheet["text-md/medium"],
    color: semanticColors.TEXT_NORMAL,
    borderRadius: 8,
  },
});

// this exists just so i can make cool loading buttons :nyaboom:
export default function () {
  //@ts-ignore react is a UMD global 🤓
  const [loadingBtns, setLoadingBtns] = React.useState<Record<number, boolean>>(
    {}
  );

  return vstorage.authorization ? (
    <>
      {...[
        {
          text: "Sync Data",
          onPress: async (setLoad) => {
            setLoad(true);

            try {
              cache.save = await syncSaveData(await grabEverything());
              cacheUpdated();

              showToast("Successfully synced data", getAssetIDByName("Check"));
            } catch (e) {
              showToast(`Failed to sync data: ${e}`, getAssetIDByName("Small"));
            }

            setLoad(false);
          },
        },
        {
          text: "Load Data",
          onPress: async (setLoad) => {
            setLoad(true);
            await syncEverything(true);
            setLoad(false);
          },
        },
      ].map((x, i, a) => {
        const off = i !== 0 ? 8 : 0;

        return (
          <Button
            text={x.text}
            color={"green"}
            size={"small"}
            onPress={() =>
              !loadingBtns[i] &&
              x.onPress((y: boolean) => {
                setLoadingBtns({ ...loadingBtns, [i]: !!y });
              })
            }
            trailing={<FormRow.Icon source={getAssetIDByName("Check")} />}
            loading={loadingBtns[i]}
            style={{
              ...styles.button,
              ...(DeviceManager.isTablet
                ? { flex: `0.${a.length}`, marginLeft: off }
                : { marginTop: off }),
            }}
          />
        );
      })}
    </>
  ) : (
    <Text style={{ ...styles.text, textAlign: "center" }}>
      Authenticate first to manage your data
    </Text>
  );
}
