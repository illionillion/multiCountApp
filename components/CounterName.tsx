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
        <Text style={styles.counterNumber}>{num}</Text>
        <TextInput
          style={styles.counterTextInput}
          placeholder="名前を入力"
          placeholderTextColor="#757575"
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
    height: 30,
    backgroundColor: "#191919",
    borderWidth:1,
    borderColor: "#2ecc71",
    alignItems:"center",
    flexDirection: "row",
  },
  counterNumber: {
    color: "#fff",
    marginHorizontal:5,
  },
  counterTextInput: {
    color: "#fff",
    width:"100%",
    fontSize:15,
  },
});
export default CounterName;
