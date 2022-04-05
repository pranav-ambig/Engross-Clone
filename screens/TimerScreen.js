import { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableHighlight, Button} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function TimerScreen(){
	const [Key, setKey] = useState(0);
	const [TimerRunning, setTimerRunning] = useState(false)
  
	return (
	  <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
		<CountdownCircleTimer
		  key = {Key}
		  isPlaying={TimerRunning}
		  duration={10}
		  colors={['#000']}
		  rotation={'counterclockwise'}>

		  {({ remainingTime }) => <Text style={{fontSize: 25}}>{remainingTime}</Text>}
		</CountdownCircleTimer>
  
		<View style={{width: '100%' ,flexDirection:'row', justifyContent: 'space-evenly'}}>
		  <Button title={TimerRunning? "Pause":"Resume"} 
				  onPress={()=>setTimerRunning(!TimerRunning)}
				  style={{innerWidth: 100}} 
				  />
		  <Button title="Reset" onPress={()=>setKey(Key => Key+1)}/>
		</View>
  
	  </View>
	)
}