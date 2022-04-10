// import {View, Text} from 'react-native';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

// export default function CalendarScreen() {
// 	return (
//     <View>
//       <Calendar
//   // Collection of dates that have to be marked. Default = {}
//   markedDates={{
//     '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
//     '2012-05-17': {marked: true},
//     '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
//     '2012-05-19': {disabled: true, disableTouchEvent: true},
//     disableMonthChange:true
//   }}
// />
//     </View>
// 	);

//   }
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
// import Typography from '../components/Typography';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule: React.FC = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2022-04-10'}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Schedule;
