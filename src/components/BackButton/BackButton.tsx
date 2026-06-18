import { Image, Pressable } from "react-native";
import { styles } from "./BackButtonStyle";


type BackButtonType = {
  onPress: () => void;
}

export function BackButton({onPress}: BackButtonType ) {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={require("../../../assets/arrow.png")}
        style={styles.arrowBack}
      />
    </Pressable>
  );
}
