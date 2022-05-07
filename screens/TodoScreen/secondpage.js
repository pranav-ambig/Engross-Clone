import React from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Modal, 
  TextInput, 
  Dimensions
} from 'react-native';
import {useState} from 'react';
import send from './assets/send.png';
const screenheight=Dimensions.get("window").height
const SecondPage = ({ navigation }) => {
  const [task, getText]=useState('None');
  return (
    /*
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            No tasks for tomorrow {'\n'} Tap + to add task
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('FirstPage')
            }>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
        React Native Tab Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
        </View>*/

    
      <Modal style={styles.formodal}
        visible={true}
        animationType="slide"
        transparent={true}
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
        onSubmitEditing={console.log(task)}
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

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  formodal:{
    backgroundColor:"white",
},
});
export default SecondPage;