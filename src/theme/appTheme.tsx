import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: "black",
    },
    resultado: {
        color: "white",
        fontSize: 100,
        textAlign: "right",
        marginBottom: 30
    },
    calculadoraContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: "flex-end"
    },
    resultadoPequeno: {
        fontSize: 30,
        textAlign: "right",
        color: "rgba(255,255,255,0.5)"
    },
    fila: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
    }
})