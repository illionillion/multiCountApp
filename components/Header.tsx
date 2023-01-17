import { StyleSheet, View, Text } from "react-native";

const Header = ():JSX.Element => {
    return (
        <View style = {styles.headerContainer}>
            <Text style = {styles.headerText}>カウントアプリ</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height:'15%',
        flex: 1,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"flex-end",
        backgroundColor: '#191919',
        borderBottomWidth:1,
        borderBottomColor: "#3498db",
    },
    headerText:{
        fontSize: 26,
        marginBottom:20,
        color:"#fff",
    },
})
export default Header