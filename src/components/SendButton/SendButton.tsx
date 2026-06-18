import { Alert, Pressable, Text } from "react-native";

import { styles } from "./SendButtonStyle";

export function SendButton() {
  return <Pressable onPress={() => {
    Alert.alert("Estou indo te socorrer!")
  }}>
    <Text style={styles.button}>Enviar</Text>
  </Pressable>;
}
