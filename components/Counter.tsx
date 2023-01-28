import { FC, useEffect, useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import CounterName from "./CounterName";
import CounterMain from "./CounterMain";
import { countStateProps } from "../screens/CountApp";
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
  updateName,
}) => {
  const no = countState.no;
  const name = countState.name;
  const count = countState.count;

  const Remove = (num: number) => {
    // fadeOut(()=>{
    // });
    removeCounter(num);
  };
  const Change = changeCount;

  const Plus = () => {
    plusCount(no);
  };
  const Minus = () => {
    if (count === 0) return;
    minusCount(no);
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = (callback:()=>void) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(callback);
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <Animated.View
      style={[
        styles.counterContainer,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      <CounterName num={no} name={name} updateName={updateName} />
      <CounterMain
        countState={countState}
        Minus={Minus}
        Plus={Plus}
        Remove={Remove}
        Change={Change}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    width: "90%",
    height: 150,
    backgroundColor: "#191919",
    borderWidth: 1,
    borderColor: "#2ecc71",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 15,
    shadowColor: "white",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.9,
    flexDirection: "column",
    margin: 15,
  },
});
export default Counter;
