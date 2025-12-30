import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Product } from './Products'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ProductItemDisplay(props: { item: Product, getVal: (num: number) => void, getPrice: (num: number) => void }) {
    const { item } = props;
    return (
        <View style={styles.container}>
            <View style={styles.imgCnt}>
                <Image source={{ uri: item.img }} style={{ height: 80, width: 80, }} resizeMode='cover' />
            </View>

            <View style={styles.txtCnt}>
                <Text>{item.brand}</Text>
                <Text>{item.price.toString()}</Text>
                <Text>{item.comments.length.toString()}/5</Text>
                <View style={styles.btnCnt}>
                    {/* <TouchableOpacity style={[styles.btnstyle, { backgroundColor: "lightgreen" }]}>
                        <Text style={{ fontWeight: "bold" }}>Buy Now</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity style={[styles.btnstyle, { backgroundColor: "lightyellow" }]} onPress={() => props.getVal(item.id)}>
                        <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnstyle, { backgroundColor: "lightyellow" }]} onPress={() => props.getPrice(item.id)}>
                        <AntDesign name="edit" size={24} color="black" />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 350,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderWidth: 1,
        marginTop: 20
    },
    imgCnt: {
        marginLeft: 15,
        height: 80,
        width: 80,
    },
    txtCnt: {
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    btnCnt: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 40,
        width: 180,
        padding: 2

    },
    btnstyle: {

        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        height: 35,
        width: 70,
    }
})