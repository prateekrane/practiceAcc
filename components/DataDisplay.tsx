import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

function DataDisplay() {
    const [fruits, setFruits] = useState([
        "Mango",
        "Apple",
        "Orange",
        "Pineapple",
        "Bananna",
    ]);

    return (
        <View>
            <FlatList
                data={fruits}

                keyExtractor={(item, index) => index.toString()}

                ListHeaderComponent={() => (
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        🍎 Fruit List
                    </Text>
                )}

                ListHeaderComponentStyle={{
                    padding: 10,
                    borderWidth: 1,
                    borderColor: "black",
                    backgroundColor: "#f2f2f2",
                }}

                ListFooterComponent={() => (
                    <Text style={{ textAlign: "center" }}>
                        --- End of List ---
                    </Text>
                )}

                ListFooterComponentStyle={{
                    padding: 10,
                }}

                renderItem={({ item, index }) => (
                    <Text>
                        {index + 1} - {item}
                    </Text>
                )}
            />
        </View>
    );
}

export default DataDisplay;
