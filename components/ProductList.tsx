import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Product, products } from './Products'
import ProductItemDisplay from './ProductItemDisplay';
import { styles } from './ProductItemDisplay';


export default function ProductList() {
    const [prods, setProds] = useState<Product[]>(products);


    function deleteItem(num: number) {
        setProds(current => current.filter((item) => item.id !== num))
        //Yeh meko current (updated prods) ki value deh raha hae jis seh jab mea koi bhi item ko delete kar raha hu tho vo re-render mea wapas nhi aye ga


    }

    function updatePrice(num: number) {
        setProds(current => current.map(item => {
            if (item.id === num) {
                return {
                    id: item.id,
                    name: item.name,
                    brand: item.brand,
                    category: item.category,
                    price: item.price + 1000,
                    rating: item.rating,
                    instock: item.instock,
                    comments: item.comments,
                    img: item.img
                };
            }
            return item;
        }))
    }

    function showAll() {
        setProds(products);
    }

    function showElectronics() {
        setProds(products.filter((item) => item.category === "electronics"));
        // setProds(current => current.filter((item => item.category === "electronics"))) 
        // yeh pea mea esko es keh liye use nhi kar sak tha kuki mea agar furniture pea jau tho meri current state furniture wali hogi then jab mea electronics mea click karu ga tho meko empty array mile ga.
    }

    function showFurniture() {
        setProds(products.filter((item) => item.category === "furniture"));
    }

    return (
        <View>
            <FlatList
                data={prods}
                renderItem={({ item }) => (
                    <ProductItemDisplay item={item} getVal={deleteItem} getPrice={updatePrice} />
                )}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={() => {
                    return (
                        <View style={{ marginTop: 50, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                            <TouchableOpacity style={[styles.btnstyle, { width: 80 }]} onPress={showAll}><Text>All</Text></TouchableOpacity>
                            <TouchableOpacity style={[styles.btnstyle, { width: 80 }]} onPress={showElectronics}><Text>Electronics</Text></TouchableOpacity>
                            <TouchableOpacity style={[styles.btnstyle, { width: 80 }]} onPress={showFurniture}><Text>Furniture</Text></TouchableOpacity>
                        </View>
                    )
                }}

                ListFooterComponent={() => {
                    return (
                        <View style={{ marginBottom: 20, justifyContent: "center", alignItems: "center" }}><Text>----End of List</Text></View>
                    )
                }}
            />
        </View>
    )
}