import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { PlusButton, MinusButton, DeleteButton } from "./CountButton";
import { CounterMainProps } from "./CounterMain";

const ButtonContainer: FC<CounterMainProps> = ({
  countState,
  Plus,
  Minus,
  Remove,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <DeleteButton no={countState.no} Remove={Remove} />
      <MinusButton Minus={Minus} />
      <PlusButton Plus={Plus} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginLeft: 18,
  },
});

export default ButtonContainer;
