import { FC } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { version } from "../App";

interface SettingModalProps {
  modalVisible: boolean;
  setModalVisible: (flag: boolean) => void;
  counterMaxLength: number;
  setCounterMaxLength: (num: number) => void;
}

export const SettingModal: FC<SettingModalProps> = ({
  modalVisible,
  setModalVisible,
  counterMaxLength,
  setCounterMaxLength,
}) => {
  const setMaxLength = (num: number) => {
    if (num === 0) return;
    setCounterMaxLength(num);
  };
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
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.settingClose}
          >
            <Text style={styles.settingCloseText}>閉じる</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modalBody}>
          <View style={styles.settingBackgroundColor}>
            <Text style={styles.settingBackgroundColorText}>バージョン</Text>
            <View style={styles.settingBackgroundColorControls}>
              <Text style={styles.settingBackgroundColorText}>{version}</Text>
            </View>
          </View>
          <View style={styles.settingBackgroundColor}>
            <Text style={styles.settingBackgroundColorText}>最大数</Text>
            <View style={styles.settingBackgroundColorControls}>
              <TextInput
                style={styles.settingBackgroundColorTextInput}
                placeholder="数値を入力"
                placeholderTextColor="#fff"
                value={counterMaxLength.toString()}
                onChangeText={(text) =>
                  setMaxLength(
                    isNaN(parseInt(text)) ? counterMaxLength : parseInt(text)
                  )
                }
                keyboardType="number-pad"
              />
              {/* <TouchableOpacity style={styles.settingBackgroundColorTextButton}>
                <Text style={styles.settingBackgroundColorTextButtonText}>
                  変更
                </Text>
              </TouchableOpacity> */}
            </View>
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
    display: "flex",
  },
  settingCloseText: {
    color: "#fff",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBody: {
    flex: 7,
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#191919",
  },
  settingBackgroundColor: {
    width: "100%",
    marginTop: 10,
  },
  settingBackgroundColorText: {
    color: "#fff",
    marginHorizontal: 10,
    fontSize: 20,
  },
  settingBackgroundColorControls: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  settingBackgroundColorTextInput: {
    borderWidth: 1,
    borderColor: "#2ecc71",
    flex: 4,
    color: "#fff",
  },
  settingBackgroundColorTextButton: {
    borderWidth: 1,
    borderColor: "#2ecc71",
    borderRadius: 25,
    marginHorizontal: 10,
    flex: 1,
  },
  settingBackgroundColorTextButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});
