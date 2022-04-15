import { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableHighlight, Button} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import TimerScreen from './screens/TimerScreen/TimerScreen'
import SettingsScreen from './screens/SettingsScreen/SettingsScreen'
import StatScreen from './screens/StatScreen/StatScreen'
import CalendarScreen from './screens/CalendarScreen/CalendarScreen_Events'
import TodoScreen from './screens/TodoScreen/TodoScreen'

const tab = createMaterialBottomTabNavigator();

export default function CloneTest() {
  return(
    <NavigationContainer style={{top: StatusBar.currentHeight}}>
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

const styles = StyleSheet.create();