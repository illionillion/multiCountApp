import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Counter from './components/Counter';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style = {styles.mainContainer}>
        <Counter/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mainContainer: {
    height: '100%',
    marginTop:5,
  }
});
