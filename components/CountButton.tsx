import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface PlusButtonProps {
  Plus: () => void;
}
const PlusButton: FC<PlusButtonProps> = ({ Plus }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={Plus}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};
interface MinusButtonProps {
  Minus: () => void;
}
const MinusButton: FC<MinusButtonProps> = ({ Minus }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={Minus}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
  );
};
interface DeleteButtonProps {
  no: number;
  Remove: (num: number) => void;
}
const DeleteButton: FC<DeleteButtonProps> = ({ no, Remove }) => {
  const DeletePress = () => {
    Remove(no);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={DeletePress}>
      <Text style={styles.buttonText}>削除</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 15,
    width: "30%",
    height: "80%",
    marginRight: 5,
    backgroundColor: "#ffffff",
  },
  buttonText: {
    color: "blue",
    fontSize: 28,
  },
});

export { PlusButton, MinusButton, DeleteButton };
