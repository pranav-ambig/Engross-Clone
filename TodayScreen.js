import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput, 
  Pressable,
  Modal, 
  Dimensions, 
  TouchableHighlight,
  Image
} from 'react-native';
import Checkbox from 'react-native-just-checkbox';
import { useState, useEffect } from 'react';
import DropDownItem from 'react-native-drop-down-item';
import Slider from '@react-native-community/slider';
import { LogBox } from 'react-native';



let count=0;


  function AddTask(visibility){
    const screenheight=Dimensions.get("window").height;
    //const[visibility, setVisibility]=useState(false);
    return (
        <Modal style={styles.formodal}
          visible={visibility}
          animationType="slide"
          transparent={false}
          height={screenheight*0.3}
          >
          <View style={{ flex: 1, 
          height:screenheight*0.2,
          position:'absolute',
          bottom:0
          }}>
            <View style={{flexDirection:"row",
          }}>
          <TextInput
          style={{
            elevation:2,
          width:"90%",
        height:70, 
      marginLeft:2}}
          keyboardType='default'
          placeholder="     New Task"
          onChangeText={(text)=>{getText(text)}}
          //onSubmitEditing={console.log(task)}
          >
      
          </TextInput>
          <TouchableHighlight 
          activeOpacity={0.8}
          underlayColor={"grey"}
          onPress={console.log("sent")}>
            <Image source={require('./assets/send.png')} style={{flex: 1, height:10, width:40, marginTop:10}}/>
          </TouchableHighlight>
          </View>
  
          </View>
          </Modal>
      
    );
  }

function CreateTask(text){
  return(
    <View style={{flexDirection:"row"}}>
                      <Checkbox isChecked={false}
                        checkBoxSize={20}
                        checkColor='grey'
                        onToggle={console.log("move to completed")}>
                      </Checkbox>

                  <Pressable onPress={console.log("task")}>
                  <Text style={styles.taskviews}>{text}</Text>
                  </Pressable>
                  </View>
  )
}


const FirstPage = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [sliderValue, setSliderValue] = useState(20);
    const [task, getText]=useState('None');
    let tasknumber=0;
    const [taskarray, addtask]=useState([{}]);
    useEffect(
      ()=>{
        tasknumber+=1;
        taskarray.push({name:"task1", key:tasknumber});
        console.log(taskarray)
      }
    )
    useEffect(() => {
      LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flex:1, padding: 16}}>
      <ScrollView style={{alignSelf:"stretch"}}>
      <DropDownItem
              key={1}
              style={styles.dropDownItem}
              contentVisible={false}
              invisibleImage={'^'}
              visibleImage={'^'}
              header={
                <View>
                  <Text style={{
                    fontSize: 16,
                    color: 'black',
                    backgroundColor:'lightgrey'
                  }}>Overdue</Text>
                </View>
              }
            > 
                  <View style={{flexDirection:"row", flex:1}}>
                      <Checkbox isChecked={false}
                        checkBoxSize={15}
                        checkColor='grey'
                        onToggle={console.log("move to completed")}>

                      </Checkbox>
                  <TouchableOpacity onPress={console.log("task")}>
                  <Text style={styles.taskviews}>Tap to add new task</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:"row", flex:8}}>
                  <Checkbox isChecked={false}
                        checkBoxSize={15}
                        checkColor='grey'
                        onToggle={console.log("move to completed")}>

                      </Checkbox>
              <TouchableOpacity>
                  <Text style={{color: 'black', fontSize:14, marginLeft:20, borderColor:"black"}}>
                    Drag the bar to update task progress
                  </Text>
                  <Slider
                    maximumValue={100}
                    minimumValue={0}
                    minimumTrackTintColor="black"
                    maximumTrackTintColor="black"
                    step={1}
                    style={{width:"80%", height:30, marginLeft:20}}
                    value={sliderValue}
                    onValueChange={
                      (sliderValue) => setSliderValue(sliderValue)
                    }
                  />
              </TouchableOpacity>
              </View>
              <View style={{flexDirection:"row", flex:1}}>
                      <Checkbox isChecked={false}
                        checkBoxSize={15}
                        checkColor='grey'
                        onToggle={console.log("move to completed")}>

                      </Checkbox>
                  <TouchableOpacity onPress={console.log("task")}>
                  <Text style={styles.taskviews}>Long Press and drag to arrange</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:"row", flex:1}}>
                      <Checkbox isChecked={false}
                        checkBoxSize={15}
                        checkColor='grey'
                        onToggle={console.log("move to completed")}>

                      </Checkbox>
                  <TouchableOpacity onPress={console.log("task")}>
                  <Text style={styles.taskviews}>Swipe right to mark completed</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:"row", flex:1}}>
                      <Checkbox isChecked={false}
                        checkBoxSize={15}
                        checkColor='grey'
                        onToggle={console.log("move to completed")}>

                      </Checkbox>
                  <TouchableOpacity onPress={console.log("task")}>
                  <Text style={styles.taskviews}>Click on the left circle to mark the task completed</Text>
                  </TouchableOpacity>
                  </View>
            </DropDownItem>
            <DropDownItem
              key={2}
              style={styles.dropDownItem}
              contentVisible={false}
              invisibleImage={'downarrow'}
              visibleImage={'^'}
              header={
                <View>
                  <Text style={{
                    fontSize: 16,
                    color: 'black',
                    backgroundColor:'lightgrey'
                  }}>Today</Text>
                </View>
              }
            >
            </DropDownItem>
            <DropDownItem
              key={3}
              style={styles.dropDownItem}
              contentVisible={false}
              invisibleImage={'+'}
              visibleImage={count}
              header={
                <View>
                  <Text style={{
                    fontSize: 16,
                    color: 'black',
                    backgroundColor:'lightgrey'
                  }}>Completed</Text>
                </View>
              }
            >
              <Text style={[
                styles.txt,
                {
                  fontSize: 20,
                }
              ]}>
                All the completed tasks are shifted here
              </Text>
            </DropDownItem>
            </ScrollView>
        <TouchableOpacity onPress={()=>AddTask(true)} style={styles.todoplus}>
            <Text style={{fontSize:30, color:"#3ACEAB", marginLeft: 20, marginVertical:7}}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  dropDownItem:{
    margin:1,
  },
  todoplus:{
    elevation:2, 
    shadowRadius:12, 
    shadowOpacity:10,
    alignSelf:"flex-end",
    right:0, 
    backgroundColor:'white', 
    width:60, height:60, 
    borderRadius:30, 
    marginBottom:80, marginRight:20
  },
  circles:{
    borderRadius:30,
    borderColor:"grey",
  },
  taskviews:{
    height:30, marginTop:10, 
    fontSize:13,
    marginLeft:20
  }
});
export default FirstPage;