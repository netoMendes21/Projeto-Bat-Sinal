import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    width: "80%",
    marginBottom: 60,
  },
  image: {
    resizeMode: "contain",
    height: 70,
    width: 70,
    borderRadius: 50,
    marginTop: 30,
  },
  containerImage: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
