import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", marginTop: 20, marginBottom: 20 }}>
        Welcome to the MindSeed!
      </Text>

      <TouchableOpacity onPress={() => alert("TouchableOpacity pressed")}>
        <Text style={{ color: "white", marginTop: 20 }}>TouchableOpacity</Text>
      </TouchableOpacity>

      <Pressable onPress={() => alert("Pressable pressed")}>
        <Text style={{ color: "white", marginTop: 20 }}>Pressable</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19433c",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
