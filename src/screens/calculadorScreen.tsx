import React from 'react'
import { View, Text } from 'react-native'
import { Boton } from '../components/boton'
import { useCalculadora } from '../hook/useCalculadora'
import { styles } from '../theme/appTheme'



export const CalculadorScreen = () => {
    const {
        numeroAnterior,
        numeroCalculado,
        armarNumero,
        positivoNegativo,
        borrar,
        dividir,
        multiplicar,
        restar,
        sumar,
        calcular,
        setNumeroCalculado,
        setNumeroAnterior,
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {
                numeroAnterior !== "0" && (<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)
            }
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numeroCalculado}</Text>
            <View style={styles.fila}>
                <Boton numero={"C"} colorFondo={"#9b9b9b"} onPress={() => { setNumeroCalculado("0"); setNumeroAnterior("0"); }} />
                <Boton numero={"+/-"} colorFondo={"#9b9b9b"} onPress={positivoNegativo} />
                <Boton numero={"del"} colorFondo={"#9b9b9b"} onPress={borrar} />
                <Boton numero={"/"} colorFondo={"#FF9427"} colorTexto={"white"} onPress={dividir} />
            </View>
            <View style={styles.fila}>
                <Boton numero={"7"} colorTexto={"white"} onPress={() => { armarNumero("7") }} />
                <Boton numero={"8"} colorTexto={"white"} onPress={() => { armarNumero("8") }} />
                <Boton numero={"9"} colorTexto={"white"} onPress={() => { armarNumero("9") }} />
                <Boton numero={"x"} colorFondo={"#FF9427"} colorTexto={"white"} onPress={multiplicar} />
            </View>
            <View style={styles.fila}>
                <Boton numero={"4"} colorTexto={"white"} onPress={() => { armarNumero("4") }} />
                <Boton numero={"5"} colorTexto={"white"} onPress={() => { armarNumero("5") }} />
                <Boton numero={"6"} colorTexto={"white"} onPress={() => { armarNumero("6") }} />
                <Boton numero={"-"} colorFondo={"#FF9427"} colorTexto={"white"} onPress={restar} />
            </View>

            <View style={styles.fila}>
                <Boton numero={"1"} colorTexto={"white"} onPress={() => { armarNumero("1") }} />
                <Boton numero={"2"} colorTexto={"white"} onPress={() => { armarNumero("2") }} />
                <Boton numero={"3"} colorTexto={"white"} onPress={() => { armarNumero("3") }} />
                <Boton numero={"+"} colorFondo={"#FF9427"} colorTexto={"white"} onPress={sumar} />
            </View>
            <View style={styles.fila}>
                <Boton numero={"0"} colorTexto={"white"} onPress={() => { armarNumero("0") }} ancho />
                <Boton numero={"."} colorTexto={"white"} onPress={() => { armarNumero(".") }} />
                <Boton numero={"="} colorFondo={"#FF9427"} colorTexto={"white"} onPress={calcular} />
            </View>

        </View>
    )
}
