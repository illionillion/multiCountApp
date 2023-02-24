import { FC, SetStateAction } from "react";
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { version } from "./DataSave";

interface SettingModalProps {
  modalVisible: boolean;
  setModalVisible: (flag: boolean) => void;
  counterMaxLength: number;
  setCounterMaxLength: (num: SetStateAction<number>) => void;
  initialCounterMaxLength: number;
}
const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-5141642513537299/4758660592";

export const SettingModal: FC<SettingModalProps> = ({
  modalVisible,
  setModalVisible,
  counterMaxLength,
  setCounterMaxLength,
  initialCounterMaxLength,
}) => {
  const setMinus = () => {
    if (counterMaxLength === 1) return;
    setCounterMaxLength((prev) => prev - 1);
  };
  const setPlus = () => {
    setCounterMaxLength((prev) => prev + 1);
  };
  const setReset = () => {
    setCounterMaxLength(initialCounterMaxLength);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
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
          <View style={styles.settingItemTitle}>
            <Text style={styles.settingItemText}>バージョン</Text>
            <View style={styles.settingItemControls}>
              <Text style={styles.settingItemText}>{version}</Text>
            </View>
          </View>
          <View style={styles.settingItemTitle}>
            <Text style={styles.settingItemText}>最大数</Text>
            <View style={styles.settingItemControls}>
              <TouchableOpacity onPress={setMinus}>
                <Text style={styles.settingItemText}>-</Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.settingItemText}>{counterMaxLength}</Text>
              </View>
              <TouchableOpacity onPress={setPlus}>
                <Text style={styles.settingItemText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={setReset}>
                <Text style={styles.settingItemText}>リセット</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {/* 広告 */}
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
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
    ...Platform.select({
      ios: {
        flex: 7,
      },
      android: {
        flex: 11,
      },
    }),
    // flex: 9,
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#191919",
  },
  settingItemTitle: {
    width: "100%",
    marginTop: 10,
  },
  settingItemText: {
    color: "#fff",
    marginHorizontal: 10,
    fontSize: 20,
  },
  settingItemControls: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
  },
});
