import { FC } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

export interface CounterNameProps {
  num: number;
  name: string;
  updateName: (name: string, num: number) => void;
}
const CounterName: FC<CounterNameProps> = ({ num, name, updateName }) => {

  return (
    <View style={styles.counterNameContainer}>
      <View style={styles.counterName}>
        <Text>{num}</Text>
        <TextInput
          placeholder="名前"
          value={name}
          onChangeText={(text) => updateName(text, num)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterNameContainer: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "center",
  },
  counterName: {
    width: 150,
    backgroundColor: "#ffffff",
  },
});
export default CounterName;
