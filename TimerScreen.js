import react from 'react';
import { useState , Component} from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableHighlight, Button} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { SafeAreaView, TouchableWithoutFeedback } from 'react-native-web';
import Position from 'react-native/Libraries/Components/Touchable/Position';
import {BottomPopup} from './sub_screens/LabelsPopup';

const popupList=[
	{
		id: 1,
		name:'task1'
	},
	{
		id: 2,
		name:'task2'
	}
]

const App=()=>{
	let popupRef=react.createRef();
	const onShowPopup = ()=> {
		popupRef.show()
	}

	const onClosePopup =()=>{
		popupRef.close()
	}
	return (
		<>
		<StatusBar barStyle='dark-content'>
		  <SafeAreaView styles={style.container}>
			<TouchableWithoutFeedback onPress={onShowPopup}>
			<Text style={{position:'absolute', bottom: 10, right: 30}}>Unlabelled</Text>
			</TouchableWithoutFeedback>
			<BottomPopup
			  title='demo'
			ref={(target)=> popupRef =target} 
			onTouchOutside={onClosePopup}
			data={popupList}
			/>
		  </SafeAreaView>
		</StatusBar>
		</>
	)
}
const style= StyleSheet.create({
	container:{
	  flex:1,
	  alignItems: 'center',
	  justifyContent: 'center'
	},
	txtSize:{
	  fontSize: 20
	}
	})

export default function TimerScreen(){
	const [Key, setKey] = useState(0);

	function resetHandler(){
		setKey(Key => Key+1);
		setTimerRunning(false);
	}

	const [TimerRunning, setTimerRunning] = useState(false)
	// const [DistractionCount, setDistractionCount] = useState(
	// 	<View style={{alignItems: 'center'}}>
	// 			<Text style={{fontSize: 13}}>
	// 				Hit me
	// 			</Text>
	// 			<Text style={{fontSize: 13}}>
	// 				When you are distracted
	// 			</Text>
	// 	</View>

  
	return (
	  <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}> 
		<CountdownCircleTimer
		  key = {Key}
		  isPlaying={TimerRunning}
		  duration={10}
		  colors={['#000']}
		  rotation={'counterclockwise'}>

		  {({ remainingTime }) => <Text style={{fontSize: 25}}>{remainingTime}</Text>}
		  {/* {({ remainingTime }) => 
		  } */}

		

		</CountdownCircleTimer>
  
		<View style={{width: '100%' ,flexDirection:'row', justifyContent: 'space-evenly'}}>
		  <Button title={TimerRunning? "Pause":"Resume"} 
				  onPress={()=>setTimerRunning(!TimerRunning)}
				  style={{innerWidth: 100}} 
				  />
		  <Button title="Reset" onPress={resetHandler}/>
		</View>

		{/* <Text style={{position:'absolute', bottom: 10, right: 30}} onPress={()=>App}>Unlabelled</Text> */}
	  </View>
	
	  	)

}


