import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

export function CharacterInfo(param) {
    console.warn('Aprendi a fazer console log aqui!')
    return (
        <View style={style.View}>
            <Image style={style.Image} source={{uri: param.imageUrl}}/>
            <Text>{param.description}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    View: {},
    Image: {
        height: 20,
        width: '100%',
    },
})
