import { Pressable, Text } from "react-native";

import { styles } from "./SendButtonStyle";

export function SendButton() {
  return <Pressable>
    <Text style={styles.button}>Enviar</Text>
  </Pressable>;
}
