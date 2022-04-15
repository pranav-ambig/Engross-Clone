import { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Button} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export function DefaultTimerView(){
	return(
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
	)
}

export default function TimerScreen(){
	const labels = ["Stay focused!",
					"Don't get distracted!",
					"Focus on your work!", 
					"Stop dreaming!"]

	const [Key, setKey] = useState(0);
	const [WorkMode, setWorkMode] = useState(false);
	const [TimerRunning, setTimerRunning] = useState(false);
	const [DistractionCount, setDistractionCount] = useState(1);
	const [RemainingTime, setRemainingTime] = useState(0);
	const [CurrentLabelIndex, setCurrentLabelIndex] = useState(0);
	const [Duration, setDuration] = useState(10);

	const [TimerView, setTimerView] = useState(DefaultTimerView);

	function resetHandler(){
		setKey(Key => Key+1);
		setTimerRunning(false);
	}

	function updateCount(){
		if (CurrentLabelIndex == 3){
			setCurrentLabelIndex(0);
		}
		else {
			setCurrentLabelIndex(CurrentLabelIndex=>CurrentLabelIndex+1);
		}
		setDistractionCount(DistractionCount=>DistractionCount+1);
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
		useEffect(
			() => {setRemainingTime(remainingTime)},
			[remainingTime]
		);
		// RemainingTime = remainingTime;
		return(
		<TouchableOpacity onPress={()=>TimerRunning?updateCount():null}
			activeOpacity={TimerRunning? 0.2:1}>
			{TimerView}
		</TouchableOpacity>)
	}

	function formatRemainingTime(time){
		let time_min = Math.floor(time/60);
		let time_sec = time%60;
		if (time_min<10){
			time_min = "0"+time_min.toString();
		}
		if (time_sec < 10){
			time_sec = "0"+time_sec.toString();
		}
		return time_min+" : "+time_sec;
	}

	function getLabel(){
		if (WorkMode){
			if (TimerRunning)
				return labels[CurrentLabelIndex];
			else
				return "Work paused!";
		}
		else{
			return "Beat Distractions";
		}
	}

	function timerHandler(){
		// console.log(WorkMode, TimerRunning);
		if (!WorkMode){
			setTimerRunning(!TimerRunning);
			setWorkMode(!WorkMode);}
		else
			setTimerRunning(!TimerRunning);
	}

	function breakHandler(){
		if (!WorkMode){
			setDuration(20);
		}
		setTimerRunning(!TimerRunning);
		setWorkMode(!WorkMode);
		getLabel();
	}

	function OnTimerComplete(){
		setTimerView(DefaultTimerView);
		resetHandler();
	}

	return (
	  <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>

		<Text style={{fontSize: 16}}>{getLabel()}</Text>
		<Text style={{fontSize: 40}}>{formatRemainingTime(RemainingTime)}</Text>
		
		<CountdownCircleTimer
		  key = {Key}
		  isPlaying={TimerRunning}
		  duration={Duration}
		  colors={['#000']}
		  rotation={'counterclockwise'}
		  size={250}
		  onComplete={OnTimerComplete}>

		  {({remainingTime}) => renderTimerView(remainingTime)}

		</CountdownCircleTimer>
		<View style={{width: '100%' ,flexDirection:'row', justifyContent: 'space-evenly'}}>
		  <Button title={WorkMode? (TimerRunning? "Pause":"Resume") : "Timer"} 
				  onPress={timerHandler}
				  style={{innerWidth: 100}} 
				  />
		  <Button title="Reset" onPress={resetHandler}/>
		  <Button title={WorkMode? "Skip" : "Break"} onPress={breakHandler}/>
		</View>

		<Text style={{position: 'absolute', bottom: 10, right: 30}}>Unlabelled</Text>
  
	  </View>
	)
}