import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export interface countStateProps {
  no: number;
  count: number;
}

export default function App() {
  const counterState: countStateProps = {
    no: 0,
    count: 0,
  };
  const [num, setNum] = useState(1);
  const [counterList, setCounterList] = useState<countStateProps[]>([
    counterState,
  ]);
  const addCounter = () => {
    // if(num > 3)return
    setNum((prev) => prev + 1);
    setCounterList([...counterList, { no: num, count: 0 }]);
    // console.log(num);
    // console.log(counter);
  };
  const removeAllCounter = () => {
    setNum(0);
    setCounterList([]);
  };
  const removeCounter = (num: number) => {
    console.log(num);
    // setNum((prev) => prev - 1);
    setCounterList(counterList.filter((count, index) => count.no !== num));
  };
  const changeCount = (num: number, count: number) => {
    setCounterList(
      counterList.map((obj) =>
        obj.no === num ? { no: obj.no, count: count } : obj
      )
    );
  };
  const plusCount = (no: number) => {
    const newCounter = counterList.map((counter) =>
      counter.no === no ? { no: counter.no, count: counter.count + 1 } : counter
    );
    console.log(newCounter);

    setCounterList(newCounter);
  };
  return (
    <View style={styles.container}>
      <Header />
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
            />
          )}
        />
        {/* {counterList.map((i, num) => {
          console.log(i);
          console.log(num);
          return (
            <Counter
              key={num}
              countState={i}
              changeCount={changeCount}
              removeCounter={removeCounter}
              plusCount = {plusCount}
            />
          );
        })} */}
      </View>
      <Footer addCounter={addCounter} removeAllCounter={removeAllCounter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  mainContainer: {
    flex: 6,
    overflow: "scroll",
    width:"100%",
    justifyContent:"center",
  },
  scroll: {
    flexDirection: "row",
    // width:'100%',
    flex: 1,
  },
});
