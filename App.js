import React, {Fragment} from 'react';
import {StyleSheet, Text, View, Button, Image, Alert} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import colors from "./app/src/utils/colors";
import Form from './app/src/components/form'
import Result from './app/src/components/result';
import Footer from './app/src/components/footer'
export default function App() {
    return (
        <Fragment>
            <LinearGradient colors={['white' ]} style={styles.background}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>COTIZADOR DE PRESTAMOS</Text>
                </View>
                <Form></Form>
                <Result></Result>
                <Footer></Footer>
            </LinearGradient>
        </Fragment>
    );
}

function pressed() {
    Alert.alert('Presed')
}

const styles = StyleSheet.create({
    background:{
        width: '100%',
        height: '100%'
    },
    title: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        height: 50,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 25
    }
});
