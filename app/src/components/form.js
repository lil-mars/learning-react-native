import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import colors from '../utils/colors'
import RNPickerSelect from 'react-native-picker-select';

export default function Form() {
    return (
        <View style={styles.form}>
            <View style={styles.inputs}>
                <TextInput keyboardType='numeric' style={styles.input} placeholder='Cantidad'/>

                <TextInput keyboardType='numeric' style={[styles.input, styles.interestInput]} placeholder='Interes'/>
            </View>
            <RNPickerSelect style={styles.input}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
            />
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
        flexDirection: 'row'
    },
    input: {
        height: 45,
        borderBottomWidth: 1,
        width: '50%'
    },
    interestInput: {
        marginLeft: '5%',
        width: '25%'
    },
    picker:{
        marginLeft: '10%',
        width: '50%'
    }
});
