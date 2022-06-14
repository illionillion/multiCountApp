import { StyleSheet, View } from "react-native";
import CountNumber from "./CountNumber";
import ButtonContainer from "./ButtonContainer";

const CounterMain = ({props}:any):JSX.Element => {

    return(
        <View style = {styles.counterMain}>
            <CountNumber count = {props.count}/>
            <ButtonContainer events = {props} />
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