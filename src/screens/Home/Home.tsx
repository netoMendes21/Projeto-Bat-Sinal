import { View, Image } from "react-native";
import { styles } from "./HomeStyles";
import { BatLogo } from "../../components/Bat-Logo/Batlogo";
import { BatButton } from "../../components/BatButton/BatButton";
import { useState } from "react";
import { FormHelp } from "../FormHelp/FormHelp";

export function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleActivateBatSignal = () => {
    setShowForm(true);
  };

  return (
    <View style={styles.container}>
      {showForm ? (
        <FormHelp onBack={() => setShowForm(false)} />
      ) : (
        <>
          <BatLogo />
          <BatButton onPress={handleActivateBatSignal} />
        </>
      )}
    </View>
  );
}
