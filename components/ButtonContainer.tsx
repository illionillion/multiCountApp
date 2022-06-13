import { StyleSheet, View, } from "react-native";
import { PlusButton, MinusButton, DeleteButton } from "./CountButton";

const ButtonContainer = ({events}:any):JSX.Element => {
    return(
        <View style = {styles.buttonContainer}>
            <DeleteButton/>
            <MinusButton event = {events.Minus}/>
            <PlusButton event = {events.Plus}/>
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