import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const Counter = () => {

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
            <View style = {styles.counterNameContainer}>
                <View style  = {styles.counterName}>
                    <TextInput placeholder = "名前"/>
                </View>
            </View>
            <View style = {styles.counterMain}>
                <View style = {styles.countNumberContainer}>
                    <View style = {styles.countNumber}>
                        <Text style = {{fontSize: 24}}>
                            {count}
                        </Text>
                    </View>
                    <Text style = {{fontSize: 18, marginStart:8}}>個</Text>
                </View>
                <View style = {styles.buttonContainer}>
                    <Button title = "+" onPress = {Plus}/>
                    <Button title = "-" onPress = {Minus}/>
                    <Button title = "削除" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer: {
      width: '90%',
      height: '20%',
      backgroundColor: '#6EF3FA',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      shadowColor: "lightblue",
      shadowOffset: {
          height: 5,
          width: 5
      },
      shadowRadius: 2,
      shadowOpacity: 0.9,
      flexDirection: "column"
    },
    counterNameContainer: {
        width: '90%',
        // height: '20%',
        flex: 1,
        marginTop: 10,
    },
    counterName: {
        width: '40%',
        // height: '20%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
    counterMain: {
        flex: 2,
        flexDirection: "row",
    },
    countNumberContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems:"flex-end",
        marginTop:0,
        marginStart:10,
        marginBottom: 10,
    },
    countNumber: {
        width:'90%',
        height: '90%',
        backgroundColor: '#ffffff',
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 15,
    },
    buttonContainer:{
        flex: 2,
        flexDirection:"row",
        justifyContent:"center"
        // textAlign:"center"
    },
});
export default Counter