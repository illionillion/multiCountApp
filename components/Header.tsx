import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";

interface HeaderProps {
  modalVisible: boolean;
  setModalVisible: (flag: boolean) => void;
  counterSum: number;
}

const Header: FC<HeaderProps> = ({ modalVisible, setModalVisible, counterSum }) => {
  const onPress = () => {
    // ここでnavigationで遷移
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.counterSum}>
        <Text style={styles.counterSumTitle}>合計</Text>
        <Text style={styles.counterSumText}>{counterSum}</Text>
      </View>
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
  counterSumTitle: {
    fontSize: 12,
    color: "#fff",
  },
  counterSumText: {
    fontSize: 16,
    color: "#fff",
  },
  counterSum: {
    justifyContent: "center",
    alignItems:"center",
    position: "absolute",
    bottom: 20,
    left: 20,
  },
});
export default Header;
