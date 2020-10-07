import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Result() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>RESUMEN</Text>

            <View>
                <View style={styles.row}>
                    <Text style={styles.titles}>Cantidad solicitada:</Text>
                    <Text style={styles.results}>1000 Bs</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.titles}>Interes:</Text>
                    <Text style={styles.results}>5%</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.titles}>Plazo:</Text>
                    <Text style={styles.results}>12 Meses</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.titles}>Pago mensual:</Text>
                    <Text style={styles.results}>Erick</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.titles}>Total a pagar:</Text>
                    <Text style={styles.results}>1050 Bs</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '2%'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        fontSize: 22,
        paddingBottom: '6%'
    },
    row: {
        padding: '2%',
        flexDirection: 'row'
    },
    titles: {
        fontWeight: 'bold',
        width: '70%',

    },
    results: {
        width: '30%',
    }


});
