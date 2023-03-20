import { StyleSheet, View, FlatList, Alert } from "react-native";
import Counter from "../components/Counter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { SettingModal } from "../components/SettingModal";
import { getData, setData } from "../components/DataSave";
export interface countStateProps {
  no: number;
  count: number;
  name: string;
}

const initialize_num = 1;
const initialCounterMaxLength = 20;
export default function CountApp() {
  const [num, setNum] = useState(initialize_num);
  const [counterSum, setCounterSum] = useState<number>(0);
  const initialCounterState: countStateProps = {
    no: num,
    count: 0,
    name: "",
  };
  const [counterMaxLength, setCounterMaxLength] = useState(
    initialCounterMaxLength
  );
  const [counterList, setCounterList] = useState<countStateProps[]>([
    initialCounterState,
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isDone, setIsDone] = useState(false);
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
    (async () => {
      // データの読み取り
      console.log("getData");
      const getCounterMaxLength = await getData("CounterMaxLength");
      if (getCounterMaxLength !== "") {
        console.log("getData", getCounterMaxLength);
        setCounterMaxLength(
          !isNaN(parseInt(getCounterMaxLength))
            ? parseInt(getCounterMaxLength)
            : initialCounterMaxLength
        );
      }
      const getCounterList = await getData("CountList");
      if (getCounterList !== "") {
        console.log("getData", getCounterList);
        const json: countStateProps[] = JSON.parse(getCounterList);
        setCounterList(json);
        if (json.length !== 0) {
          setNum(
            // 最大値を取得
            Math.max.apply(
              null,
              json.map((item) => item.no)
            )
          );
        } else {
          setNum(0);
        }
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (!isDone) {
        setIsDone(!isDone);
        return;
      }
      console.log("setData");
      // 合計更新
      const sum = counterList.reduce((prev, current) => prev + current.count, 0)
      setCounterSum(sum)
      // データの保存
      await setData("CountList", JSON.stringify(counterList));
      await setData("CounterMaxLength", counterMaxLength.toString());
      await setData("num", num.toString());
    })();
  }, [counterList, counterMaxLength, num]);
  return (
    <View style={styles.container}>
      <Header modalVisible={modalVisible} setModalVisible={setModalVisible} counterSum={counterSum} />
      <View style={styles.mainContainer}>
        <FlatList
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
        initialCounterMaxLength={initialCounterMaxLength}
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
