import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export function Header() {
    return (
        <View style={style.Container}>
            <Text style={style.Text}>
                Informações Valorant
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        backgroundColor: '#030229',
        height: 50,
        width: '100%',
    },
    Text: {
        fontSize: 20,
        alignContent: 'center',
        color: 'white',
        textAlign: 'center',
    }
})
