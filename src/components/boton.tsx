import React from 'react'
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from "react-native";


interface Props {
    numero: string,
    colorFondo?: string | undefined,
    colorTexto?: string | undefined,
    ancho?: boolean | undefined,
    onPress?: (event: GestureResponderEvent) => void

}

export const Boton = (props: Props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.boton, { backgroundColor: props.colorFondo ?? "#2d2d2d", width: props.ancho ? (85) * 2 : 80 }]}>
                <Text style={[styles.botonTexto, { color: props.colorTexto ?? "black" }]}>{props.numero}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    boton: {
        height: 80,
        marginHorizontal: 10,
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    botonTexto: {
        fontSize: 30,
        color: "black",
        fontWeight: "bold"
    }

})