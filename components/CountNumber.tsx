import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

const CountNumber: FC<{ count: number }> = ({ count }) => {
  return (
    <View style={styles.countNumberContainer}>
      <View style={styles.countNumber}>
        <Text style={styles.countNumberText}>{count}</Text>
      </View>
      <Text style={styles.countText}>個</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  countNumberContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 0,
    marginStart: 10,
    marginBottom: 10,
  },
  countNumber: {
    width: "90%",
    height: "90%",
    backgroundColor: "#191919",
    borderColor: "#2ecc71",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  countNumberText: {
    fontSize: 24,
    color: "#fff",
  },
  countText: {
    fontSize: 18,
    marginStart: 8,
    color: "#fff",
  },
});

export default CountNumber;
