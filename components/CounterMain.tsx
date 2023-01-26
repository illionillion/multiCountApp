import { StyleSheet, View } from "react-native";
import CountNumber from "./CountNumber";
import ButtonContainer from "./ButtonContainer";
import { FC } from "react";
import { countStateProps } from "../screens/CountApp";

export interface CounterMainProps {
  countState: countStateProps;
  Minus: () => void;
  Plus: () => void;
  Remove: (num: number) => void;
  Change: (num: number, count: number) => void;
}

const CounterMain: FC<CounterMainProps> = ({
  countState,
  Minus,
  Plus,
  Remove,
  Change,
}) => {
  return (
    <View style={styles.counterMain}>
      <CountNumber count={countState.count} />
      <ButtonContainer
        countState={countState}
        Plus={Plus}
        Minus={Minus}
        Change={Change}
        Remove={Remove}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  counterMain: {
    flex: 2,
    flexDirection: "row",
  },
});

export default CounterMain;
