import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Footer = ({events}:any):JSX.Element => {
    const add = events.addCounter
    const removeAll = events.removeAllCounter
    return(
        <View style = {styles.footerContainer}>
            <TouchableOpacity onPress={add} style={styles.footerButton}>
                <Text>作成</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={removeAll} style={styles.footerButton}>
                <Text>リセット</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer:{
        width: '100%',
        height:'15%',
        flex:1,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: '#6FE39F',
        flexDirection:"row",
        paddingLeft:5,
        paddingRight:5,
    },
    footerButton:{
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        width:'40%',
        height:'60%',
        backgroundColor:'#6EF3FA',
        marginTop:0,
        marginBottom:20,
        marginRight:15,
        marginLeft:15,
        borderRadius:15,

    }
})

export default Footer