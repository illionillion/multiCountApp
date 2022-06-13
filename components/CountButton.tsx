import { StyleSheet, Text, TouchableOpacity } from "react-native";

const PlusButton = ({event}:any):JSX.Element => {

    return (
        <TouchableOpacity style = {styles.button} onPress = {event}>
            <Text style = {styles.buttonText}>+</Text>
        </TouchableOpacity>
    )
}
const MinusButton = ({event}:any):JSX.Element => {

    return (
        <TouchableOpacity style = {styles.button} onPress = {event}>
            <Text style = {styles.buttonText}>-</Text>
        </TouchableOpacity>
    )
}
const DeleteButton = ({event}:any):JSX.Element => {

    return (
        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.buttonText}>削除</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
})

export {PlusButton, MinusButton, DeleteButton}