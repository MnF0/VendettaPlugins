import { ReactNative as RN, stylesheet } from "@vendetta/metro/common";
import { semanticColors } from "@vendetta/ui";
import { Forms } from "@vendetta/ui/components";
import { SuperAwesomeIconEl } from "./SuperAwesomeIcon";

const { FormRow } = Forms;

interface propAction {
  icon: number;
  destructive?: boolean;
  onPress: (rerender: () => void) => void;
}

interface props {
  index: number;
  headerLabel: React.JSX.Element | string;
  headerIcon?: number;
  descriptionLabel: string;
  actions?: () => propAction[];
}

const styles = stylesheet.createThemedStyleSheet({
  card: {
    backgroundColor: semanticColors.BACKGROUND_SECONDARY,
    borderRadius: 5,
  },
  header: {
    padding: 0,
    backgroundColor: semanticColors.BACKGROUND_TERTIARY,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  actions: { flexDirection: "row-reverse", alignItems: "center" },
});

export default (props: props) => {
  //@ts-ignore react is a UMD global 🤓
  const [rerender, forceRerender] = React.useState(0);

  return (
    <RN.View style={[styles.card, { marginBottom: 10 }]}>
      <FormRow
        style={styles.header}
        label={props.headerLabel}
        leading={props.headerIcon && <FormRow.Icon source={props.headerIcon} />}
      />
      <FormRow
        label={props.descriptionLabel}
        trailing={
          <RN.View style={styles.actions}>
            {props.actions?.().map(({ icon, onPress, destructive }) => (
              <SuperAwesomeIconEl
                icon={icon}
                onPress={() => {
                  onPress(() => forceRerender(rerender + 1));
                }}
                style="card"
                destructive={destructive ?? false}
              />
            ))}
          </RN.View>
        }
      />
    </RN.View>
  );
};
