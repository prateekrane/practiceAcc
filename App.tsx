import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';
import ProductList from './components/ProductList';
import UseEffectDemo from './components/UseEffectdemo';
import UseEffectAxiosDemo from './components/UseEffectAxiosDemo';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductList /> */}
      {/* <UseEffectDemo /> */}
      <UseEffectAxiosDemo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
