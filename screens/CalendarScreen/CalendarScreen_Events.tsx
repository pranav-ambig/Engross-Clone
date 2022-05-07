
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, StatusBar, StyleSheet, Modal, Dimensions} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};


const Schedule: React.FC = () => {
  const [items, setItems] = useState({});
  function App(visiblity){
  
    var flatMonth = new Array();
  var day = new Array();
  var calendar = new Array();
  
  const YEAR = new Date().getFullYear();
  
  const dates = {'Jan':31, 'Feb':28, 'Mar':31, 'Apr':30, 
                 'May':31, 'Jun':30, 'Jul':31, 'Aug':31, 
                 'Sep':30, 'Oct':31, 'Nov':30, 'Dec':31};
  
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 
                'May', 'Jun', 'Jul', 'Aug', 
                'Sep', 'Oct', 'Nov', 'Dec'];
  
  var week=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  
  for (var i = 0; i < 12; i++){
    for(var j = 1; j <= dates[months[i]]; j++){
      day.push(j) 
    }
    flatMonth.push({id : months[i], number : i+1, days : day});
    day=[];
    calendar.push(flatMonth[i])
  }
  
  if (YEAR % 100 != 0 && YEAR % 400 == 0 || YEAR % 4 == 0){
    calendar[1].days.push(29);
  }
  
  let MONTH = new Date().getMonth()
  var list = new Array()
  
  for(let i = 0; i<calendar[MONTH].days.length; i++){
    list.push({name: i+1, id:i+1})
  }
  
  const [time, setTime] = useState(list)
  
  
  
  // return(
  //   // <Modal
  //   //       animationType='slide'
  //   //       transparent={true}
  //   //       visible={visiblity}
  //   //       >
  //   //   <View style={{flexDirection:'row', height:100}}>
  //   //     <View style={{
  //   //       flex:1,
  //   //       marginLeft:20,
  //   //       marginVertical:20
  //   //     }}>
  //   //       <Text>
  //   //         April
  //   //       </Text>
  //   //     </View>
  //   //   </View>
  //   // </Modal>
  //  )
  
  }

  const loadItems = (day) => {
    setTimeout(() => {
     
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };
  const now = new Date();
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <SafeAreaView
              style={{
                
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text style={{height:'90%'}} label="J" />
            </SafeAreaView>
            {/* <StatusBar style='auto'/> */}
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };
  const DateRender = (item)=> {
  }
  return (
    <View style={{flex:1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={timeToString(new Date())}
        renderItem={renderItem}
      />
      <MaterialCommunityIcons name="calendar-blank" color={'black'} size={130} style={{position: 'absolute', top: 320, left: 135}}/>
      <Text style={{position: 'absolute',top:450, right:130 }}>
                No events for the day.
      </Text>
      <Text style={{position: 'absolute',top:470, right:50, color:'grey' }} >
                Tap on + to add an event or create a schedule.
      </Text >
      <Text style={{fontSize: 20, top: 75, left: 20}}>
        Events
      </Text>
      <Text style={{left: 105, fontSize:20, top: 45}}>
        Tasks
      </Text>
      <View >
      <TouchableOpacity style={{width:50, height: 50, backgroundColor:'#fff', left:340, borderRadius: 100, bottom: 10}}>
        <Text style={{fontSize: 40, left: 13, bottom: 7}}>
          +
        </Text>
      </TouchableOpacity>
      </View>
      </View>
  );
};const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton1: {
    width: 100,
    height: 100,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
    position:'absolute',
    right: 100
  },
  roundButton2: {
    marginTop: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
});

export default Schedule;

