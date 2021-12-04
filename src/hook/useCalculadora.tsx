import { useRef, useState } from "react";


enum OPERADORES {
    SUMAR,
    RESTAR,
    MULTIPLICAR,
    DIVIDIR
}


export const useCalculadora = () => {

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
                setNumeroCalculado((num2 / num1).toString())
                break;
            case OPERADORES.MULTIPLICAR:
                setNumeroCalculado(`${num1 * num2}`)
                break;
            case OPERADORES.RESTAR:
                setNumeroCalculado(`${num2 - num1}`)
                break;
            case OPERADORES.SUMAR:
                setNumeroCalculado(`${num1 + num2}`)
                break;

        }
        setNumeroAnterior("0");

    }

    return {
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
    }
}
