import { FC } from "react";
import { StyleSheet, View } from "react-native";
import CounterName from "./CounterName";
import CounterMain from "./CounterMain";
import { countStateProps } from "../App";
export interface CounterProps {
  countState: countStateProps;
  removeCounter: (num: number) => void;
  changeCount: (num: number, count: number) => void;
  plusCount: (num: number) => void;
  minusCount: (num: number) => void;
  updateName: (name: string, num: number) => void;
}
const Counter: FC<CounterProps> = ({
  countState,
  changeCount,
  removeCounter,
  plusCount,
  minusCount,
  updateName
}) => {
  const no = countState.no;
  const name = countState.name;
  const count = countState.count;

  const Remove = removeCounter;
  const Change = changeCount;

  const Plus = () => {
    plusCount(no);
  };
  const Minus = () => {
    if (count === 0) return;
    minusCount(no);
  };

  return (
    <View style={styles.counterContainer}>
      <CounterName num={no} name={name} updateName={updateName} />
      <CounterMain
        countState={countState}
        Minus={Minus}
        Plus={Plus}
        Remove={Remove}
        Change={Change}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    width: "90%",
    height: 150,
    backgroundColor: "#6EF3FA",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 15,
    shadowColor: "lightblue",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowRadius: 2,
    shadowOpacity: 0.9,
    flexDirection: "column",
    margin: 15,
  },
});
export default Counter;
