import { StyleSheet, View, FlatList, Alert } from "react-native";
import Counter from "../components/Counter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { SettingModal } from "../components/SettingModal";
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface countStateProps {
  no: number;
  count: number;
  name: string;
}
const getData = async (key: string) => { // 保存されている値がJSONの場合はパースして使います
  try {
    const value = await AsyncStorage.getItem(key);

    return value;
  } catch (err) {
    console.error(err)
  }
  return '';
}

const setData = async(key: string, value: any) => { // 型は適宜設定します
  try {
    const json = JSON.stringify(value);

    await AsyncStorage.setItem(key, json);
  } catch (err) {
    console.error(err)
  }
}

export default function CountApp() {
  const [num, setNum] = useState(1);
  const counterState: countStateProps = {
    no: num,
    count: 0,
    name: "",
  };
  const [counterMaxLength, setCounterMaxLength] = useState(20);
  const [counterList, setCounterList] = useState<countStateProps[]>([
    // counterState,
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const addCounter = () => {
    if (counterMaxLength <= counterList.length) return;
    setNum((prev) => prev + 1);
    setCounterList([
      ...counterList,
      {
        no: num + 1,
        count: 0,
        name: "",
      },
    ]);
  };
  const removeAllCounter = () => {
    const reset = () => {
      setNum(0);
      setCounterList([]);
    };
    if (counterList.length === 0) {
      reset();
      return;
    }
    Alert.alert("確認", "本当にリセットしますか？", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: reset,
      },
    ]);
  };
  const removeCounter = (num: number) => {
    console.log(num);
    setCounterList(counterList.filter((count, index) => count.no !== num));
  };
  const changeCount = (num: number, count: number) => {
    setCounterList(
      counterList.map((counter) =>
        counter.no === num
          ? {
              no: counter.no,
              count: count,
              name: counter.name,
            }
          : counter
      )
    );
  };
  const plusCount = (no: number) => {
    const newCounter = counterList.map((counter) =>
      counter.no === no
        ? {
            no: counter.no,
            count: counter.count + 1,
            name: counter.name,
          }
        : counter
    );
    console.log(newCounter);

    setCounterList(newCounter);
  };
  const minusCount = (no: number) => {
    const newCounter = counterList.map((counter) =>
      counter.no === no
        ? {
            no: counter.no,
            count: counter.count - 1,
            name: counter.name,
          }
        : counter
    );
    console.log(newCounter);

    setCounterList(newCounter);
  };
  const updateName = (name: string, no: number) => {
    const newCounter = counterList.map((counter) =>
      counter.no === no
        ? {
            no: counter.no,
            count: counter.count,
            name: name,
          }
        : counter
    );
    setCounterList(newCounter);
  };
  useEffect(() => {
    (async ()=>{
      console.log('getData')
      console.log(await getData('CountList'))
      const data:countStateProps = JSON.parse(await getData('CountList') || '')
      setCounterList(data)
    })()
  }, []);
  useEffect(() => {
    (async ()=>{
      console.log(counterList);
      await setData('CountList', counterList)
    })()
  }, [counterList]);
  return (
    <View style={styles.container}>
      <Header modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <View style={styles.mainContainer}>
        <FlatList
          style={{}}
          data={counterList}
          renderItem={(i) => (
            <Counter
              countState={i.item}
              changeCount={changeCount}
              removeCounter={removeCounter}
              plusCount={plusCount}
              minusCount={minusCount}
              updateName={updateName}
            />
          )}
        />
      </View>
      <Footer addCounter={addCounter} removeAllCounter={removeAllCounter} />
      <SettingModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        counterMaxLength={counterMaxLength}
        setCounterMaxLength={setCounterMaxLength}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    flexDirection: "column",
  },
  mainContainer: {
    flex: 6,
    width: "100%",
    justifyContent: "center",
  },
});
