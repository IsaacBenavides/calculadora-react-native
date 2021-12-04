import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native'
import { Boton } from '../components/boton'
import { styles } from '../theme/appTheme'


enum OPERADORES {
    SUMAR,
    RESTAR,
    MULTIPLICAR,
    DIVIDIR
}

export const CalculadorScreen = () => {
    const [numeroCalculado, setNumeroCalculado] = useState("0");
    const [numeroAnterior, setNumeroAnterior] = useState("0");

    const ultimaOperacion = useRef<OPERADORES>()

    function armarNumero(numero: string) {

        if (numeroCalculado.includes(".") && numero === ".") return;
        if (numeroCalculado.startsWith("0") || numeroCalculado.startsWith("-0")) {
            if (numero === ".") {
                setNumeroCalculado(numeroCalculado + numero);
            } else if (numero === "0" && numeroCalculado.includes(".")) {
                setNumeroCalculado(numeroCalculado + numero);
            } else if (numero !== "0" && !numeroCalculado.includes(".")) {
                setNumeroCalculado(numero);
            } else if (numero === "0" && !numeroCalculado.includes(".")) {
                setNumeroCalculado(numeroCalculado)
            }
            else {
                setNumeroCalculado(numeroCalculado + numero)
            }
        } else {
            setNumeroCalculado(numeroCalculado + numero);
        }
    }

    function positivoNegativo() {

        if (numeroCalculado.includes("-")) {
            setNumeroCalculado(numeroCalculado.replace("-", ""))
        } else {
            setNumeroCalculado("-" + numeroCalculado)
        }
    }

    function borrar() {
        if (numeroCalculado.length === 1 || (numeroCalculado.includes("-") && numeroCalculado.length === 2)) {
            setNumeroCalculado("0")
        } else {
            setNumeroCalculado(numeroCalculado.slice(0, -1))
        }
    }

    function cambiarNumeroPorAnterior() {

        if (numeroCalculado.endsWith(".")) {
            setNumeroAnterior(numeroCalculado.slice(0, -1));
            setNumeroCalculado("0");
        } else {
            setNumeroAnterior(numeroCalculado);
            setNumeroCalculado("0");
        }

    }


    function dividir() {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = OPERADORES.DIVIDIR
    }

    function multiplicar() {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = OPERADORES.MULTIPLICAR
    }

    function restar() {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = OPERADORES.RESTAR
    }

    function sumar() {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = OPERADORES.SUMAR
    }

    function calcular() {

        let num1 = Number(numeroCalculado);
        let num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case OPERADORES.DIVIDIR:
                if (num2 === 0.0 || num2 === 0) {
                    setNumeroCalculado("0")
                } else {
                    setNumeroCalculado((num2 / num1).toString())
                }
                break;
            case OPERADORES.MULTIPLICAR:
                setNumeroCalculado(`${num1 * num2}`)
            case OPERADORES.RESTAR:
                setNumeroCalculado(`${num2 - num1}`)
            case OPERADORES.SUMAR:
                setNumeroCalculado(`${num1 + num2}`)
        }
        setNumeroAnterior("0");

    }


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
