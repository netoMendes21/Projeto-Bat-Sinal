import { Image, Text } from "react-native";
import { styles } from "./BackButtonStyle";

export function BackButton() {
  return (
    <>
      <Image
        source={require("../../../assets/arrow.png")}
        style={styles.container}
      />
    </>
  );
}
