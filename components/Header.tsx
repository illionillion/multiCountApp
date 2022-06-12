import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from "react-native";

const Header = () => {
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
        textAlign:"center",
        alignItems:"center",
        justifyContent:"flex-end",
        backgroundColor: '#6FE39F',
    },
    headerText:{
        fontSize: 26,
        marginBottom:20,
    },
})
export default Header