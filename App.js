import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import * as Linking from "expo-linking";

export default function App() {
  const url = Linking.useURL();
  useEffect(() => {
    console.log("url", url);
  }, [url]);
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>It works! {new Date().toLocaleDateString()}</Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
