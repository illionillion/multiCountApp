import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = (): JSX.Element => {
  const onPress = () => {
    console.log("Press Icon");
    // ここでnavigationで遷移
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>カウントアプリ</Text>
      {/* @ts-ignore */}
      <AntDesign
        name="setting"
        size={30}
        color="white"
        style={styles.settingIcon}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: "15%",
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#191919",
    borderBottomWidth: 1,
    borderBottomColor: "#3498db",
  },
  headerText: {
    fontSize: 26,
    marginBottom: 20,
    color: "#fff",
  },
  settingIcon: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
export default Header;
