import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from "react-native";

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
                    <TextInput style = {{}} placeholder = "名前"/>
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
                    <TouchableOpacity style = {styles.button} onPress = {Plus}>
                        <Text style = {styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {Minus}>
                        <Text style = {styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttonText}>削除</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer: {
      width: '90%',
      height: '15%',
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
        // width: '100%',
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        // alignItems:"flex-start",
        // textAlign:"left",
    },
    counterName: {
        width: 200,
        // width: '40%',
        backgroundColor: '#ffffff',
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
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        marginLeft: 18,
    },
    button: {
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        borderRadius:15,
        width: '30%',
        height: '80%',
        marginRight: 5,
        backgroundColor: '#ffffff',
    },
    buttonText: {
        color: 'blue',
        fontSize: 28,
    }
});
export default Counter