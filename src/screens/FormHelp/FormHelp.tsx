import { Text, Image, View } from "react-native";
import { styles } from "./FormHelpStyles";

export function FormHelp() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo-red.jpg")}
      style={styles.image}
      ></Image>
    </View>
  );
}
