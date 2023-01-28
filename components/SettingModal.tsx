import { FC } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface SettingModalProps {
  modalVisible: boolean;
  setModalVisible: (flag: boolean) => void;
}

export const SettingModal: FC<SettingModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.moalHeader}>
          <Text style={styles.headerText}>設定</Text>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.settingClose}
          >
            <Text style={styles.settingCloseText}>閉じる</Text>
          </Pressable>
        </View>
        <View style={styles.modalBody}>
          <View style={styles.settingBackgroundColor}>
            <Text style={styles.settingBackgroundColorText}>背景色</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "#191919",
    display: "flex",
    flexDirection: "column",
  },
  moalHeader: {
    flex: 1,
    display: "flex",
    width: "100%",
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
  settingClose: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  settingCloseText: {
    color: "#fff",
  },
  modalBody: {
    flex: 6,
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#191919",
  },
  settingBackgroundColor: {
    width: "100%",
    marginTop:10,
  },
  settingBackgroundColorText: {
    color: "#fff",
    marginHorizontal: 10,
    fontSize: 20,
  },
  //   modalView: {
  //     margin: 20,
  //     backgroundColor: "white",
  //     borderRadius: 20,
  //     padding: 35,
  //     alignItems: "center",
  //     shadowColor: "#000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     shadowOpacity: 0.25,
  //     shadowRadius: 4,
  //     elevation: 5,
  //   },
  //   button: {
  //     borderRadius: 20,
  //     padding: 10,
  //     elevation: 2,
  //   },
  //   buttonOpen: {
  //     backgroundColor: "#F194FF",
  //   },
  //   buttonClose: {
  //     backgroundColor: "#2196F3",
  //   },
  //   textStyle: {
  //     color: "white",
  //     fontWeight: "bold",
  //     textAlign: "center",
  //   },
  //   modalText: {
  //     marginBottom: 15,
  //     textAlign: "center",
  //   },
});
