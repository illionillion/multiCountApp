import { FC } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export interface FooterProps {
  addCounter: () => void;
  removeAllCounter: () => void;
}
const Footer: FC<FooterProps> = ({
  addCounter,
  removeAllCounter,
}): JSX.Element => {
  const add = addCounter;
  const removeAll = removeAllCounter;
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={add} style={styles.footerButton}>
        <Text style={styles.footerButtonText}>カウンター追加</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={removeAll} style={styles.footerButton}>
        <Text style={styles.footerButtonText}>リセット</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    height: "15%",
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191919",
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 5,
    borderTopWidth:1,
    borderTopColor: "#3498db",
  },
  footerButton: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: "60%",
    backgroundColor: "#191919",
    borderWidth: 1,
    borderColor: "#3498db",
    marginTop: 0,
    marginBottom: 20,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 15,
  },
  footerButtonText: {
    color:"#fff",
  }
});

export default Footer;
