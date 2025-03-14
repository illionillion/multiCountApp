import { FontAwesome } from '@expo/vector-icons';
import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface PlusButtonProps {
  Plus: () => void;
}
const PlusButton: FC<PlusButtonProps> = ({ Plus }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={Plus}>
      <FontAwesome name="plus" style={styles.buttonText} />
    </TouchableOpacity>
  );
};
interface MinusButtonProps {
  Minus: () => void;
}
const MinusButton: FC<MinusButtonProps> = ({ Minus }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={Minus}>
      <FontAwesome name="minus" style={styles.buttonText} />
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
      <FontAwesome name="trash" style={styles.buttonText} />
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
    backgroundColor: "#191919",
    borderWidth: 1,
    borderColor: "#2ecc71",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});

export { PlusButton, MinusButton, DeleteButton };
