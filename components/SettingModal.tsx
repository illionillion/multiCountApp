import { FC, SetStateAction, useState } from "react";
import {
  Linking,
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
  const [admobError, setAdmobError] = useState<string>("");
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
  const openUrl = (url: string) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("無効なURLです: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error("URLを開けませんでした。", err));
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
            <Text style={styles.settingItemText}>カウンターの最大数</Text>
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
          <TouchableOpacity
            style={styles.settingItemTitle}
            onPress={() =>
              openUrl(
                "https://multicountapp-privacy-policy.on.drv.tw/multicountapp-privacy-policy/"
              )
            }
          >
            <Text style={styles.settingItemTextPolicy}>
              利用規約・プライバシーポリシーを開く
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#191919",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 広告 */}
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          /**
           * [admob/no-fill] The ad request was successful, but no ad was returned due to lack of ad inventory.が表示された
           */
          // onAdFailedToLoad={(error) => {
          //   Alert.alert(error.name, error.message, [
          //     {
          //       text: "OK",
          //     },
          //   ]);
          // }}

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
        flex: 9,
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
  settingItemTextPolicy: {
    color: "#fff",
    marginHorizontal: 10,
    fontSize: 18,
  },
  settingItemControls: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
  },
});
