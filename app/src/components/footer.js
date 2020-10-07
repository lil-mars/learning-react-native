import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Alert } from 'react-native';
import colors from "../utils/colors";
export default function Footer() {
    return (
        <View>
            <TouchableOpacity onPress={f} style={{marginTop: '20%'}}>
                <Text style={styles.button}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}
function f() {
    Alert.alert('presed');
}
const styles = StyleSheet.create({

    button:{
        backgroundColor: colors.dark,
        color: 'white',
        width: "75%",
        borderRadius: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: "2%",
        fontSize: 15,
    }
});

