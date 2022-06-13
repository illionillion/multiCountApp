import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Counter from './components/Counter';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [num, setNum] = useState(1)
  const [counter, setCounter] = useState([0])
  const addCounter = () => {
    if(num > 3)return
    setNum(prev => prev + 1)
    setCounter([...counter, num])
    // console.log(num);
    // console.log(counter);
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style = {styles.mainContainer}>
        {/* <ScrollView style = {styles.scroll}> */}
          {counter.map((e)=>(<Counter key={e} />))}
        {/* </ScrollView> */}
      </View>
      <Footer events = {{addCounter}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection:'column',
  },
  mainContainer: {
    flex:6,
    overflow:'scroll',
    // flexDirection:'row',
  },
  scroll:{
    // width:'100%',
    flex:1
  }
});
