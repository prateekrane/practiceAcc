import react from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Product } from './UseEffectAxiosDemo';

export default function DisplayMainItem(props: { items: Product, getId: (num: number) => void }) {


    return (
        <View style={styles.container}>
            <View style={styles.cardsty}>
                <View>
                    <Image source={{ uri: props.items.image }} style={styles.imgsty} />
                </View>
                <View style={styles.contentcontainer}>
                    <Text style={styles.titlestyle}>{props.items.title}</Text>
                    <Text style={styles.categorystyle}>{props.items.category}</Text>
                    <View style={styles.priceContainer}><Text style={{ fontWeight: "600" }}>${props.items.price}</Text></View>
                </View>
                <TouchableOpacity style={styles.deleteButton} onPress={() => { props.getId(props.items.id) }}>
                    <Text style={styles.deleteText}>🗑️</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",

        padding: 10,
    },
    cardsty: {
        height: 120,
        width: 350,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 15,

        padding: 15

    },
    imgsty: {
        height: 90,
        width: 80,
        resizeMode: "contain"
    },
    contentcontainer: {
        flex: 1,
    }, titlestyle: {
        fontSize: 12.5,
        fontWeight: "bold"
    },
    categorystyle: {
        fontWeight: "400",
        color: "gray"
    },
    priceContainer: {
        justifyContent: "flex-end", alignItems: "flex-end"
    },
    deleteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    deleteText: {
        fontSize: 20,
    }
})
