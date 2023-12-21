import { View } from "react-native";
//import CategoriesScreen from "./src/screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Holaaaaa</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: "#fff",
    alingnItems: "center",
    justifyContent: "center",
  },
});
