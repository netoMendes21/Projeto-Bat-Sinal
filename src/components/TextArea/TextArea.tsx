import { Text, TextInput } from "react-native";
import { styles } from "./TextAreaStyle";

type TextAreaType = {
  label: string;
  placeholder: string;
};

export function TextArea({ label, placeholder }: TextAreaType) {
  return (
    <>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.textArea}
        editable
        multiline
        maxLength={40}
        placeholder={placeholder}
        placeholderTextColor="red"
      />
    </>
  );
}
