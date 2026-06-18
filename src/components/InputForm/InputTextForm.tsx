import { Text, TextInput, View } from "react-native";

import { styles } from "./InputTextFormStyles";

type InputForm = {
  label: string;
  placeholder: string;
};

export function InputForm({ label, placeholder }: InputForm) {
  return (
    <>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.textInputs}
        placeholder={placeholder}
        placeholderTextColor="red"
      />
    </>
  );
}
