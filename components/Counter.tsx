import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CounterName from "./CounterName";
import CounterMain from "./CounterMain";

const Counter = ():JSX.Element => {

    const [count, setCount] = useState(0)

    const Plus = () => {
        setCount(prevCount => prevCount + 1)
    }
    const Minus = () => {
        if(count === 0) return
        setCount(prevCount => prevCount - 1)
    }

    return (
        <View style = {styles.counterContainer}>
            <CounterName/>
            <CounterMain props={{count, Minus, Plus}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer: {
      width: '90%',
      height: '20%',
      backgroundColor: '#6EF3FA',
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderRadius: 15,
      shadowColor: "lightblue",
      shadowOffset: {
          height: 5,
          width: 5
      },
      shadowRadius: 2,
      shadowOpacity: 0.9,
      flexDirection: "column",
      marginTop:15,
    },
    
});
export default Counter