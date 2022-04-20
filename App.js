import { StatusBar } from 'expo-status-bar';
import Tabs from 'react-native-tabs';
import { Menu, MenuItem, MenuDivider, MenuTrigger, MenuOption,  MenuOptions} from 'react-native-material-menu';
import { Image, Dimensions, TouchableHighlight, TouchableOpacity, StyleSheet, Modal, Text, View, Button, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import FirstPage from './TodayScreen';
import SecondPage from './secondpage';
import Inbox from './inbox';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#3ACEAB',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { textAlign:"left"},
        tabBarIndicatorStyle: {
          borderBottomColor: 'white',
          borderBottomWidth: 3,
        },
        tabBarStyle: { backgroundColor: 'white' },

        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize:16,
          fontWeight:"bold",
          textAlign:"left"
        },
      })}>
      <Tab.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          tabBarLabel: 'Today'
          }
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //       name="home"
          //       color={color}
          //       size={size}
          //     />
          // ),
        }  />
      <Tab.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          tabBarLabel: 'Tomorrow',
          ScreenOptions:{
            tabBaractiveTintColor:"#FFBF00"
          }
        }} />
        <Tab.Screen
            name="ThirdPage"
            component={Inbox}
            options={{
            tabBarLabel: 'Inbox',
            }} />
    </Tab.Navigator>
  );
}

function App() {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
    
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{ title: 'Tasks' }}
          style={{
            flex:8
          }}/>
      </Stack.Navigator>
      <Menu style={{flex:1}}>
            <MenuTrigger text="..." />

            <MenuOptions>
              <MenuOption onSelect={() => alert(`Save`)} text="Save" />
              <MenuOption onSelect={() => alert(`Delete`)}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert(`Not called`)}
                disabled={true}
                text="Disabled"
              />
            </MenuOptions>
          </Menu>
    </NavigationContainer>
  );
}

export default App;




/*
textDecorationLine: 'line-through',

<View style={{padding:80}}>
    <Menu
    visible={visible}
    anchor={<Text onPress={showMenu}>Show menu</Text>}
    onRequestClose={hideMenu}
  >
    <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
    <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
    <MenuItem disabled>Disabled item</MenuItem>
    <MenuDivider />
    <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
  </Menu>
  </View>


export default function App() {
  return (
    <View style={styles.container}>
      <Text>ok works</Text>
      <Button title="Hello" onPress={DiffTimerScreen}>
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
App();

export default function App(){
    return(
        <SafeAreaView style={{paddingTop:50}}>
        {//}<Button title="Timer" styles={{paddingTop:50}}/>
}
<Tabs
		style={styles.container}
		selectedStyle={{color:'white'}}
	  >
		  <Text name="first">First</Text>
		  <Text name="second">Second</Text>
		  <Text name="third">Third</Text>
	  </Tabs>
        </SafeAreaView>
           )
 } //function closer

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop:60
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    });
const popupheight=Dimensions.get("window").height
const popupwidth=Dimensions.get("window").width
let hour=new Date().getHours();
let minute= new Date().getMinutes();

export default function ModalForTimer(){
    const [time, settime]=useState([
        {name:'1', id:'1'}, 
        {name:'2', id:'2'}, 
        {name:'3', id:'3'}, 
        {name:'4', id:'4'}, 
        {name:'5', id:'5'}, 
        {name:'6', id:'6'}, 
        {name:'7', id:'7'}, 
        {name:'8', id:'8'}, 
        {name:'9', id:'9'}, 
        {name:'10', id:'10'},
        {name:'15', id:'11'}, 
        {name:'20', id:'12'}, 
        {name:'25', id:'13'}, 
        {name:'30', id:'14'}, 
        {name:'35', id:'15'}, 
        {name:'40', id:'16'}, 
        {name:'45', id:'17'}, 
        {name:'50', id:'18'}, 
        {name:'55', id:'19'}, 
        {name:'60', id:'20'},
        {name:'65', id:'21'},
        {name:'70', id:'22'},
        {name:'75', id:'23'},
        {name:'80', id:'24'},
        {name:'85', id:'25'},
        {name:'90', id:'26'},
        {name:'95', id:'27'},
        {name:'100', id:'28'},
        {name:'120', id:'29'},
        {name:'150', id:'30'},
        {name:'180', id:'31'}
        ]);
        const [session, setsession]=useState([
            {name:'1', id:'1'}, 
            {name:'2', id:'2'}, 
            {name:'3', id:'3'}, 
            {name:'4', id:'4'}, 
            {name:'5', id:'5'}, 
            {name:'6', id:'6'}, 
            {name:'7', id:'7'}, 
            {name:'8', id:'8'}, 
            {name:'9', id:'9'}, 
            {name:'10', id:'10'},
            {name:'11', id:'11'}, 
            {name:'12', id:'12'}, 
            {name:'13', id:'13'}, 
            {name:'14', id:'14'}, 
            {name:'15', id:'15'}, 
            {name:'16', id:'16'}, 
            {name:'17', id:'17'}, 
            {name:'18', id:'18'}, 
            {name:'19', id:'19'}, 
            {name:'20', id:'20'},
            {name:'21', id:'21'},
            {name:'22', id:'22'},
            {name:'23', id:'23'},
            {name:'24', id:'24'}
            ]);
        const [duration, picker]=useState(1);
        const [sesisoncount, sessioncounter]=useState(1);
    return(
        // time setter
        <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            height={popupheight/2}>
                
                <View style ={{
                flex:1,
                width: '100%',
                height:popupheight/2,
                backgroundColor: 'white',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                position:'absolute',
                bottom:0
            }}>
                <View style={{flexDirection:'row'}}>
                <View style={{
                    flex:1,
                    marginLeft:20,
                    marginVertical:20
                }
                }>
                    <Text>
                        Work
                    </Text>
                </View>
                    <View style={{flex:5}}>
                    <FlatList
                        data={time}
                        renderItem={({item})=>(
                            <TouchableHighlight underlayColor={"#eeeeee"} onPress={()=>{(picker(item.name))}}>
                            <Text style={styles.unselected}>{item.name}</Text>
                            </TouchableHighlight>
                        )}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        />
                    </View>
                    <View style={{flex:1.5, marginRight:10,
                    marginVertical:20}}>
                        <Text>Minutes</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{
                    flex:2,
                    marginLeft:20,
                    marginVertical:20
                }
                }>
                    <Text>
                       Sessions
                    </Text>
                </View>
                    <View style={{flex:9}}>
                        <FlatList
                        data={session}
                        renderItem={({item})=>(
                            <TouchableHighlight underlayColor={"#eeeeee"} onPress={()=>{(sessioncounter(item.name))}}>
                                <Text style={styles.unselected}>{item.name}</Text>
                            </TouchableHighlight>
                        )}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        />
                    </View>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection:'row'
                }}>
                    <TouchableOpacity style={styles.revise}>
                    <Text style={{color:"grey"}}>
                        Revise before
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.revise}>
                    <Text style={{color:"grey", textAlign:"center"}}>
                        Revise after
                    </Text>
                    </TouchableOpacity>
    
                </View>
                <View style={{
                    flex: 1,
                    flexDirection:'row',
                    paddingLeft:20
                }}>
                    <Image source={require('./assets/label.png')} style={{width:2, height:2, paddingTop:10, padding:10, paddingRight:20}} />
                    <Text style={{flex:4, marginLeft:20}}>
                        Label
                    </Text>
    
                </View>
                <View style={{
                    flex: 1,
                }}>
                    <Text style={styles.popuptext}>
                        Comment/Note...
                    </Text>
    
                </View>
                <View style={{
                    flex: 1,
                    
                }}>
                    <TouchableOpacity style={{
                        backgroundColor:"#34bee5",
                        borderRadius:20,
                        width:popupwidth*0.6, 
                        height:'75%'}}
                    onPress={()=>{console.log(duration, "minutes to be updated on remaining time and then timer starts\n", sesisoncount, " sessions")}}>
                        <Text style={{textAlign:'center', color:"white", fontWeight:"100", fontSize:14, paddingTop:10}}>
                            START
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    
                }}>
                    <Text textAlign='center'>
                        Timer will finish at {hour+(time.name)/60 +":"+minute+(time.name)%60}
                    </Text>
                </View>
                </View>
                </Modal>  
                </View>           
           )
        } //function closer

        const styles=StyleSheet.create({
          popuptext: {
          textAlign: "left",
          },
          unselected: {
            margin: 3,
            borderRadius:6,
            padding:18,
            color:'grey'
          },
          revise:{
            backgroundColor:"white",
            borderColor:'grey',
            borderWidth:2,
            borderRadius:20,
            paddingRight:10,
            paddingLeft:10,
            paddingTop:5,
            marginHorizontal:20,
            height:'75%'}
        });*/


/*<Button title="Close modal"
                color="#0aadff"
                onPress={()=>{Modal.visible=false}}>
                </Button>
*/