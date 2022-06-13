import { StyleSheet, View } from "react-native";
import CountNumber from "./CountNumber";
import ButtonContainer from "./ButtonContainer";

const CounterMain = ({props}:any):JSX.Element => {
    const Minus = props.Minus
    const Plus = props.Plus
    return(
        <View style = {styles.counterMain}>
            <CountNumber count = {props.count}/>
            <ButtonContainer events = {{Minus, Plus}} />
        </View>
    )
}

const styles = StyleSheet.create({
    counterMain: {
        flex: 2,
        flexDirection: "row",
    },
})

export default CounterMain