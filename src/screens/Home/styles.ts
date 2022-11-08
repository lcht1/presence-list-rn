import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131016",
        padding: 24,
    },

    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48,
    },
    date: {
        color: "#6b6b6b",
        fontSize: 16,
    },

    input: {
        backgroundColor: "#1f1325",
        height: 56,
        borderRadius: 7,
        color: "#fff",
        padding: 15,
        fontSize: 16,
        flex: 1,
        marginRight: 7,
    },
    form: {
        flexDirection: "row",
        width: "100%",
        marginTop: 36,
        marginBottom: 42,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 24,
    },
    emptyList: {
        color: "#6b6b6b",
        fontSize: 15,
    },
});
