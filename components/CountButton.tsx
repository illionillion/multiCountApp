import { StyleSheet, Text, TouchableOpacity } from "react-native";

const PlusButton = ({event}:any):JSX.Element => {
    const plus = event.Plus
    // const change = event.Change
    // const no = event.no
    // const count = event.count
    // const PlusPress = () => {
    //     plus()
    //     change(no,count)
    // }
    return (
        <TouchableOpacity style = {styles.button} onPress = {plus}>
            <Text style = {styles.buttonText}>+</Text>
        </TouchableOpacity>
    )
}
const MinusButton = ({event}:any):JSX.Element => {
    const minus = event.Minus
    return (
        <TouchableOpacity style = {styles.button} onPress = {minus}>
            <Text style = {styles.buttonText}>-</Text>
        </TouchableOpacity>
    )
}
const DeleteButton = ({event}:any):JSX.Element => {
    const no = event.no
    const remove = event.Remove
    const DeletePress = () => {
        remove(no)
    }
    return (
        <TouchableOpacity style = {styles.button} onPress = {DeletePress}>
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