import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CountApp from "./screens/CountApp";
// const Stack = createStackNavigator();

export default function App() {
  return (
    <CountApp />
    // <NavigationContainer>
    //   {/* @ts-ignore */}
    //   <Stack.Navigator>
    //     <Stack.Screen name="CountApp" component={CountApp} />
    //     {/* <Stack.Screen name="詳細ページ" component={<View></View>} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    flexDirection: "column",
  },
  mainContainer: {
    flex: 6,
    overflow: "scroll",
    width: "100%",
    justifyContent: "center",
  },
  scroll: {
    flexDirection: "row",
    // width:'100%',
    flex: 1,
  },
});
