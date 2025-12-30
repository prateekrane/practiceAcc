import react, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function UseEffectDemo() {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log("Every render execution")
    });

    useEffect(() => {
        console.log("After initial rendering execution")
    }, [])

    useEffect(() => {
        console.log("After chnage in the dependency it will get executed")
    }, [counter])

    const Inc = () => {
        return (
            setCounter(counter + 1)
        )
    }

    return (
        <View style={styles.container}>
            <Text>{counter}</Text>
            <TouchableOpacity style={styles.btnctn} onPress={Inc}><Text>Increment me</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    btnctn: {
        height: 80,
        width: 180,
        borderWidth: 1,
        backgroundColor: "powderyellow"
    }

})
