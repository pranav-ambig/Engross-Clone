
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule: React.FC = () => {
  const [items, setItems] = useState({});

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
      <MaterialCommunityIcons name="calendar-blank" color={'black'} size={130} style={{position: 'absolute', top: 250, left: 130}}/>
      <Text style={{position: 'absolute',top:400, right:130 }}>
                No events for the day.
      </Text>
      <Text style={{position: 'absolute',top:420, right:50, color:'grey' }} >
                Tap on + to add an event or create a schedule.
      </Text >
      <Text style={{fontSize: 20, position: 'absolute', bottom:0}}>
        Events
      </Text>
      <Text style={{left: 70, fontSize:20, top: 50}}>
        Tasks
      </Text>
      <View >
      <TouchableOpacity style={{width:50, height: 50, backgroundColor:'grey', left:340, borderRadius: 100}}>
        <Text>
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
