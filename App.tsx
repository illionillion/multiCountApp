import { StyleSheet, Text, View, ScrollView, Button, FlatList } from 'react-native';
import Counter from './components/Counter';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {
  const counterState = {
    'no': 0,
    'count': 0,
  }
  const [num, setNum] = useState(1)
  const [counter, setCounter] = useState([counterState])
  const addCounter = () => {
    // if(num > 3)return
    setNum(prev => prev + 1)
    setCounter([...counter, {'no':num,'count':0}])
    // console.log(num);
    // console.log(counter);
  }
  const removeAllCounter = () => {
    setNum(0)
    setCounter([])
  }
  const removeCounter = (num:number) => {
    console.log(num);
    setNum(prev => prev - 1)
    setCounter(
        counter.filter((count, index) => (count.no !== num))
    )
  }
  const changeCount = (num:number, count:number) => {
    setCounter(counter.map((obj) => (obj.no === num ? { no: obj.no, count: count } : obj)))
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style = {styles.mainContainer}>
        {/* <View >
          <FlatList style={{}} data={counter} renderItem = {i => <Counter/>} />
        </View> */}
          {counter.map((i,num)=>{
            console.log(i);
            console.log(num);
            const no = i.no
            const count = i.count
            return(<Counter key={num} props = {{count,no,removeCounter,changeCount}} />)
          })}
      </View>
      <Footer events = {{addCounter, removeAllCounter}}/>
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
  },
  scroll:{
    flexDirection:'row',
    // width:'100%',
    flex:1
  }
});
