import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CounterName from "./CounterName";
import CounterMain from "./CounterMain";

const Counter = ({props}:any):JSX.Element => {
    console.log(props);
    
    const no = props.no
    const c = props.c
    const [count, setCount] = useState(0)
    // console.log(num);

    const Remove = props.removeCounter
    const Change = props.changeCount

    const Plus = () => {
        setCount(prevCount => prevCount + 1)
    }
    const Minus = () => {
        if(count === 0) return
        setCount(prevCount => prevCount - 1)
    }

    return (
        <View style = {styles.counterContainer}>
            <CounterName num = {no}/>
            <CounterMain props={{count, Minus, Plus, Remove, Change, no}}/>
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