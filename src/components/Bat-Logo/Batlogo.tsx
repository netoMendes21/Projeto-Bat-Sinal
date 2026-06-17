import { Image, Text } from "react-native";

import { styles } from "./BatLogoStyles";

export function BatLogo() {
  return (
    <>
      <Image
        source={require("../../../assets/logo-principal.jpg")}
        style={styles.image}
      />
    </>
  );
}
