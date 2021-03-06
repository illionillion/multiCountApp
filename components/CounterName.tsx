import { StyleSheet, View, TextInput, Text } from "react-native";

const CounterName = ({num}:any):JSX.Element => {

    return (
        <View style = {styles.counterNameContainer}>
            <View style  = {styles.counterName}>
                <Text>{num}</Text>
                <TextInput placeholder = "名前"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    counterNameContainer: {
        flex: 1,
        marginTop: 10,
        marginLeft:10,
        justifyContent: 'center',
    },
    counterName: {
        width: 150,
        backgroundColor: '#ffffff',
    },
})
export default CounterName