import React, { useState } from 'react';
import { View, Dimensions, Text, StyleSheet, StatusBar, TouchableHighlight, Button, Modal} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Position from 'react-native/Libraries/Components/Touchable/Position';
//import popup from './popup';

const popupheight=Dimensions.get("window").height
let state=true;

class DiffTimerScreen extends React.Component{

    constructor() {
        super();
        this.state={
            show: false
        }
    }

    render() {
	/*function statechanger(state){
		state=!state
		return (state)
	}*/
    function TimerScreen(){
    const [Key, setKey] = useState(0);
    
        function resetHandler(){
            setKey(Key => Key+1);
            setTimerRunning(false);
        }
    const [TimerRunning, setTimerRunning] = useState(false)
    }
return(
    // time setter
            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <CountdownCircleTimer
              key = {TimerScreen.Key}
              isPlaying={TimerScreen.TimerRunning}
              duration={10}
              colors={['#000']}
              rotation={'counterclockwise'}>
    
              {({ remainingTime }) => <Text style={{fontSize: 25}}>{remainingTime}</Text>}
              {/* {({ remainingTime }) => 
              } */}
    
            
    
            </CountdownCircleTimer>
      
            <View style={{width: '100%' ,flexDirection:'row', justifyContent: 'space-evenly'}}>
              <Button title={TimerScreen. TimerRunning? "Pause":"Resume"} 
                      onPress={()=>setTimerRunning(!TimerScreen.TimerRunning)}
                      style={{innerWidth: 100}} 
                      />
              <Button title="Timer" onPress={()=>{this.setState({show:true})}}/>
              <Modal
		animationType="fade"
		transparent={true}
		visible={this.state.show}>
				
		    <View style ={{
            width: '100%',
            height: popupheight/2,
            backgroundColor: 'white',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            position:'absolute',
            bottom:0
        }}>
            <Text>Timer screen</Text>
		    <Button title="Close modal"
            color="#0aadff"
            onPress={()=>{this.setState({show:false})}}>
            </Button>
            </View>
            </Modal>        
            </View>
            <Text style={{position: 'absolute', bottom: 10, right: 30}}>Unlabelled</Text>
      
          </View>
      //  )
    //} //function closer
	
)
}



} // class closing bracket

export default DiffTimerScreen;

/*import React from "react";
import { Modal, 
    Dimensions, 
    TouchableWithoutFeedback, 
    Stylesheet, View, 
    Text} from "react-native";

const popupheight=Dimensions.get("window").height

export function Popup(){
    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={true}>
            <View style ={
    {
        flex: 1,
        width: '100%',
        height: popupheight/2,
        backgroundColor: 'white',
		justifyContent: 'space-evenly',
		alignItems: 'center'
    }
}></View>
        </Modal>

    )
}*/