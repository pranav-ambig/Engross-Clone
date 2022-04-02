import { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableHighlight} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

let a = 0;
const tab = createMaterialBottomTabNavigator();

function CalendarScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calendar!</Text>
    </View>
  );
}

function TodoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Todo!</Text>
    </View>
  );
}

function TimerScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Timer!</Text>
    </View>
  )
}

function StatScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Statistics!</Text>
    </View>
  )
}

function SettingsScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

export default function CloneTest() {
  return(
    <NavigationContainer>
      <tab.Navigator initialRouteName='Timer'
                    activeColor="#3e3e3e"
                    inactiveColor="#838383"
                    barStyle={{ backgroundColor: '#fff' }}
                    shifting={false}>
    
        <tab.Screen name='Calendar' component={CalendarScreen} 
          options={{tabBarIcon:({color}) => (
              <MaterialCommunityIcons name="calendar-blank" color={color} size={26}/>)}}/>

        <tab.Screen name='Todo' component={TodoScreen} 
          options={{tabBarIcon:({color}) => (
              <MaterialCommunityIcons name="check-all" color={color} size={26}/>)}}/>

        <tab.Screen name='Timer' component={TimerScreen} 
          options={{tabBarIcon:({color}) => (
              <MaterialCommunityIcons name="timer-outline" color={color} size={26}/>)}}/>

        <tab.Screen name='Statistics' component={StatScreen} 
          options={{tabBarIcon:({color}) => (
              <MaterialCommunityIcons name="poll" color={color} size={26}/>)}}/>

        <tab.Screen name='Settings' component={SettingsScreen}
          options={{tabBarIcon:({color}) => (
              <MaterialCommunityIcons name="cog-outline" color={color} size={26}/>)}}/>

      </tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create()