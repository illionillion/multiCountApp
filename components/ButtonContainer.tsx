import { StyleSheet, View, } from "react-native";
import { PlusButton, MinusButton, DeleteButton } from "./CountButton";

const ButtonContainer = ({events}:any):JSX.Element => {
    const Remove = events.Remove
    const Minus = events.Minus
    const Plus = events.Plus
    const Change = events.Change
    const no = events.no
    const count = events.count
    return(
        <View style = {styles.buttonContainer}>
            <DeleteButton event = {{Remove, no}}/>
            <MinusButton event = {{Minus, Change, count}}/>
            <PlusButton event = {{Plus, Change, count}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        flex: 2,
        flexDirection:"row",
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        marginLeft: 18,
    },
})

export default ButtonContainer