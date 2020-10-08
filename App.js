import React, {Fragment, useState} from 'react';
import {StyleSheet, Text, View, Alert, Button} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import colors from "./app/src/utils/colors";
import Form from './app/src/components/form'
import Result from './app/src/components/result';
import Footer from './app/src/components/footer'
export default function App() {
    const [amount, setAmount] = useState(null);
    const [interest, setInterest] = useState(null);
    const [month, setMonth] = useState(null);
    const [result, setResult] = useState({
        monthAmount: null,
        totalAmount: null,
        months: null,
        amount: null,
        interest: null
    });
    const calculate = () => {
        console.log('Capital: ', amount);
        console.log('Interes: ', interest);
        console.log('Meses: ', month);
        if (!amount ||  !interest || !month)
            console.log('No puedes realizar la operacion ')
        else{
            const result_interest = interest / 100;
            const monthAmount = amount / ((1 - Math.pow(result_interest + 1, - month)) /result_interest);
            const totalAmount = monthAmount * month;
            setResult({
                monthAmount: monthAmount.toFixed(2).replace('.', ','),
                totalAmount: totalAmount.toFixed(2).replace('.', ','),
                months: month,
                amount: amount,
                interest: interest
            });
        }
    };
    return (
        <Fragment>
            <LinearGradient colors={[colors.primary, colors.secondary ]} style={styles.background}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>COTIZADOR DE PRESTAMOS</Text>
                </View>
                <Form setAmount={setAmount} setInterest={setInterest} setMonth={setMonth}></Form>
                <Result setResult={result}></Result>
                <Footer calculate={calculate}></Footer>
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
        backgroundColor: colors.dark,
        alignItems: 'center',
        height: 60,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        shadowRadius: 5
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 25
    }
});
