import react, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";

import DisplayMainItem from "./DisplayMainItems";

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};
export default function UseEffectAxiosDemo() {
  const [data, setData] = useState<Product[]>([]);
  const [originalData, setOriginalData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
        setOriginalData(response.data);
      } catch (error) {
        console.log("Error is:" + error);
      }
    };
    fetchData();
  }, []);

  function DisplayMenClothing() {
    const updatedList = originalData.filter((item) => {
      return item.category === "men's clothing";
    });
    setData(updatedList);
  }
  function Displayjewelery() {
    const updateList = originalData.filter((item) => {
      return item.category === "jewelery";
    });

    setData(updateList);
  }
  function Displayelectronics() {
    const updateList = originalData.filter((item) => {
      return item.category === "electronics";
    });
    setData(updateList);
  }
  function Dispalywomenclothing() {
    const updateList = originalData.filter((item) => {
      return item.category === "women's clothing";
    });
    setData(updateList);
  }

  function DisplayAll() {
    setData(originalData);
  }

  function DeleteItem(num: number) {
    const deleteItem = async () => {
      try {
        const response = await axios.delete(
          `https://fakestoreapi.com/products/${num}`
        );
        console.log(response.data);
        setData(data.filter((item) => item.id !== num));
        setOriginalData(originalData.filter((item) => item.id !== num));
      } catch (error) {
        console.log("Error message is" + error);
      }
    };
    deleteItem();
  }

  function updateItem(num: number, itemPrice: number) {
    const UpdateItem = async () => {
      try {
        const response = await axios.put(
          `https://fakestoreapi.com/products/${num}`,
          {
            price: itemPrice + 1.0,
          }
        );
        const newval = response.data;
        console.log(response.data);
        const NewList = data.map((item) =>
          item.id === num ? { ...item, ...newval } : item
        );
        setData(NewList);
        // setOriginalData(
        //   originalData.map((item) =>
        //     item.id === num ? { ...item, ...NewList } : item
        //   )
        // );
        setOriginalData(NewList);
      } catch (error) {
        console.log("Error Message" + error);
      }
    };
    UpdateItem();
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DisplayMainItem
            items={item}
            getId={DeleteItem}
            getVal={updateItem}
          />
        )}
        ListHeaderComponent={() => {
          return (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  marginTop: 50,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <TouchableOpacity
                  style={[styles.btnstyle, { width: 120 }]}
                  onPress={DisplayAll}
                >
                  <Text>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btnstyle, { width: 120 }]}
                  onPress={DisplayMenClothing}
                >
                  <Text>men's clothing</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btnstyle, { width: 120 }]}
                  onPress={Displayjewelery}
                >
                  <Text>jewelery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btnstyle, { width: 120 }]}
                  onPress={Displayelectronics}
                >
                  <Text>electronics</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btnstyle, { width: 120 }]}
                  onPress={Dispalywomenclothing}
                >
                  <Text>women's clothing</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "powderblue",
    width: "100%",
  },
  listheaderssty: {},
  btnstyle: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: 35,
    width: 70,
  },
});
