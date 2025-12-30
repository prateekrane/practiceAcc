import react, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import NameDis from "./NameDis";

export default function Form() {
    const [txt, setTxt] = useState<string>("")
    const [isPresses, setPressed] = useState<boolean>(false);
    const [number, setNumber] = useState<number>(0);
    const [bhai, setBhai] = useState<string>("");
    function handlerInput(text: string) {
        setTxt(text);
        console.log(text);

    }
    function getNumber(num: number) {
        setNumber(num);
    }

    function getName(name: string) {
        setBhai(name);
    }

    return (
        <View style={styles.container}>

            <Text> Enter Your Name</Text>
            <TextInput
                style={styles.txtinp}
                placeholder="Enter Your Name"
                onChangeText={handlerInput}
            />
            <Pressable style={[styles.btnsty, { backgroundColor: isPresses ? "white" : "black", }]} onPressIn={() => setPressed(!isPresses)} onPressOut={() => { setPressed(!isPresses) }}> <Text style={styles.ftnsty}>Press Me!</Text></Pressable>
            <NameDis name={txt} sendData={getNumber} sendName={getName} />
            <Text>Counter number is : {number.toString()}</Text>
            <Text>Bhai name is {bhai}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    txtinp: {
        height: 40,
        width: 180,
        borderWidth: 1,
        borderColor: "black",
    },
    btnsty: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        height: 50,
        width: 170,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 50
    },
    ftnsty: {
        color: "green",
        fontSize: 30,
        fontWeight: "700",
    }
})