import React, {Fragment} from 'react';
import {StyleSheet, TextInput, View } from "react-native";
import colors from '../utils/colors'
import RNPickerSelect from 'react-native-picker-select';

export default function Form(props) {
    const {setAmount, setInterest, setMonth} = props;
    console.log(setMonth);
    return (
        <View style={styles.form}>
            <View style={styles.inputs}>
                <TextInput keyboardType='numeric'
                           onChange={(e)=>setAmount(e.nativeEvent.text)}
                           style={styles.input} placeholder='Cantidad'/>

                <TextInput keyboardType='numeric'
                           onChange={(e)=>setInterest(e.nativeEvent.text)}
                           style={[styles.input, styles.interestInput]}
                           placeholder='Interes'/>
            </View>
            <View style={styles.picker}>
                <RNPickerSelect
                                onValueChange={(value) => setMonth(value)}
                                items={[
                                    { label: '3 Meses', value: '3' },
                                    { label: '6 Meses', value: '6' },
                                    { label: '12 Meses', value: '12' },
                                    { label: '24 Meses', value: '24' },
                                ]}
                />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    form: {
        marginTop: 20,
        flexDirection: 'column'
    },
    inputs: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    input: {
        height: 45,
        borderBottomWidth: 1,
        width: '50%',
        color: 'white',
        textAlign: 'center',
        letterSpacing: 2
    },
    interestInput: {
        marginLeft: '5%',
        width: '25%'
    },

    picker:{
        paddingTop: '7%',
        paddingBottom: '7%',
        width: '80%',
        alignSelf: 'center',
    }
});
