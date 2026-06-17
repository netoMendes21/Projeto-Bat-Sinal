import { Image, View } from "react-native";
import { styles } from "./FormHelpStyles";
import { InputForm } from "../../components/InputForm/InputTextForm";
import { TextArea } from "../../components/TextArea/TextArea";
import { SendButton } from "../../components/SendButton/SendButton";
import { BackButton } from "../../components/BackButton/BackButton";

export function FormHelp() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <BackButton />
        <Image
          source={require("../../../assets/logo-red.jpg")}
          style={styles.image}
        />
      </View>

      <InputForm label="Nome Completo" placeholder="Digite seu nome" />

      <InputForm label="Localização" placeholder="Digite onde você está" />

      <TextArea
        label="Que tipo de perigo?"
        placeholder="Qual é o perigo que você está correndo?"
      ></TextArea>

      <TextArea
        label="Qual é a situação?"
        placeholder="Você está ferido?"
      ></TextArea>

      <SendButton />
    </View>
  );
}
