import * as appJson from "../app.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const version = appJson.expo.version;

export const getData = async (key: string): Promise<string> => {
  // 保存されている値がJSONの場合はパースして使います
  try {
    const value = await AsyncStorage.getItem(key);
    return value || "";
  } catch (err) {
    console.error(err);
  }
  return "";
};

export const setData = async (key: string, value: string) => {
  // 型は適宜設定します
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.error(err);
  }
};
