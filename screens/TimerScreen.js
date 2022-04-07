import { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Button} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Position from 'react-native/Libraries/Components/Touchable/Position';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function TimerScreen(){
	const [Key, setKey] = useState(0);
	const [TimerRunning, setTimerRunning] = useState(false);
	const [DistractionCount, setDistractionCount] = useState(1);
	const [RemainingTime, setRemainingTime] = useState(0);
	const [TimerView, setTimerView] = useState(
			<View style={{
				justifyContent: 'center',
				alignItems: 'center', 
				// backgroundColor: 'dodgerblue',
				width: 220,
				height: 220,
				borderRadius:150}}>
				  <Text style={{fontSize: 17}}>
					  Hit me
				  </Text>
				  <Text style={{fontSize: 17}}>
					  When you are distracted
				  </Text>
			 </View>
	);

	function resetHandler(){
		setKey(Key => Key+1);
		setTimerRunning(false);
	}

	function updateCount(){
		setDistractionCount(DistractionCount=>DistractionCount+1)
		setTimerView(
			<View style={{
				width: 220,
				height: 220, 
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 300}}>
					<Text style={{fontSize: 50}}>{DistractionCount}</Text>
			</View>
		);
	}

	function renderTimerView(remainingTime){
		setRemainingTime(remainingTime);
		return(
		<TouchableOpacity onPress={()=>TimerRunning?updateCount():null}
			activeOpacity={TimerRunning? 0.2:1}>
			{TimerView}
		</TouchableOpacity>)
	}

	return (
	  <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>

		<Text>{RemainingTime}</Text>
		
		<CountdownCircleTimer
		  key = {Key}
		  isPlaying={TimerRunning}
		  duration={10}
		  colors={['#000']}
		  rotation={'counterclockwise'}
		  size={250}>

		  {/* {({ remainingTime }) => setTimerView(remainingTime)} */}
		  {({remainingTime}) => renderTimerView(remainingTime)}

		</CountdownCircleTimer>
  
		<View style={{width: '100%' ,flexDirection:'row', justifyContent: 'space-evenly'}}>
		  <Button title={TimerRunning? "Pause":"Resume"} 
				  onPress={()=>setTimerRunning(!TimerRunning)}
				  style={{innerWidth: 100}} 
				  />
		  <Button title="Reset" onPress={resetHandler}/>
		</View>

		<Text style={{position: 'absolute', bottom: 10, right: 30}}>Unlabelled</Text>
  
	  </View>
	)
}