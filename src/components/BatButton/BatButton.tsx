import { Pressable, Text } from "react-native";
import { styles } from "./BatButtonStyles";

type BatButtonType = {
  onPress: () => void;
};

export function BatButton({ onPress }: BatButtonType) {
  return (
    <>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>Activate Bat Signal</Text>
      </Pressable>
    </>
  );
}
