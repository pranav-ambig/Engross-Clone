import { Children, useState } from 'react';
import {View, Text, Dimensions, TextInput, Pressable, Modal, TouchableWithoutFeedback} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function saveHandler(LabelName){
	console.log()
}

export default function LabelScreen(LabelScreenVisibile, setLabelScreenVisibile){

	const [SelectedBallIndex, setSelectedBallIndex] = useState(0);
	const [LabelName, setLabelName] = useState('');
	const labelViewWidth = Dimensions.get('screen').width;
	let label_colors = [
		'#3e3e3e',
		'#c2175b',
		'#f66e9e',
		'#e040fc',
		'#9001d7',
		'#5b2c70',
		'#3C4DB6',
		'#85919D',
		'#1F8DEE',
		'#007986',
		'#29B1A3',
		'#6ECA73',
		'#57862F',
		'#C0CA33',
		'#F9A825',
		'#FF6E41',
		'#6D4D42',
		'#FF5353',
		'#01E6C7',
		'#4DD0E2'
	]
	// for (let i=0; i<20-label_colors.length; i++){
	// 	label_colors.push('green');
	// }

	let label_balls = []
	for (let i=0; i<20; i++){
		label_balls.push(
			<Pressable
				key={i} 
				onPress={()=>setSelectedBallIndex(i)}
				activeOpacity={0.5}
				style={{
					width: 0.20*labelViewWidth,
					height: 60,
					backgroundColor: 'white',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<View style={[{width: 18, 
					height: 18, 
					borderRadius: 500, 
					backgroundColor: label_colors[i],
				}]} 
				/>
			</Pressable>
		)
	}

	label_balls[SelectedBallIndex].props.children.props.style.push({
		width: 25,
		height: 25
	})

	// label_balls[SelectedBallInTableIndex].props.style.push({width: 23, height: 23})
	// let temp = label_balls[2].style
	// temp.push({width: 10, height: 10})
	// label_balls[2].style = temp

	return( 

	<Modal
	animationType = 'slide'
	transparent = {false}
	visible = {LabelScreenVisibile}
	onRequestClose = {() => setLabelScreenVisibile(false)}
	// style={{backgroundColor: 'red'}}
	>
		<View style={{alignItems: 'center', backgroundColor: 'white', flex: 1}} >
			<View style={{
				flexDirection: 'row', 
				width: '100%',  
				justifyContent: 'space-between', 
				alignItems: 'center',
				backgroundColor: 'white',
				position: 'absolute',
				top: 23
				}}>

					<Pressable	onPress={()=>setLabelScreenVisibile(false)}>
						<MaterialCommunityIcons 
						name="arrow-left" 
						color={'#424242'} 
						size={26}
						style={{
							marginLeft: 20
						}}/>
					</Pressable>
					
					<Text style={{fontSize: 14, color: '#424242', marginRight: 20}}
						onPress={()=>saveHandler(LabelName)}>
							SAVE
					</Text>
			</View>

			<View style={{flexDirection: 'row', backgroundColor: 'white', width: '100%', alignItems: 'center', marginTop: '20%'}}>
				<View style={{
					width: 0.04*labelViewWidth,
					height: 0.04*labelViewWidth,
					backgroundColor: label_colors[SelectedBallIndex], 
					borderRadius: 40, 
					marginLeft: '10%'}}/>
				{/* {label_balls[SelectedBallIndex]} */}
				<TextInput
					style={{marginLeft: '10%', fontSize: 23, fontWeight: '100', width: '100%'}}
					placeholder='New label name'
					onChangeText={(v)=>{setLabelName(v)}}
					/>
			</View>
			<View style={{
				flexDirection: 'row', 
				flexWrap: 'wrap', 
				justifyContent: 'center', 
				alignItems: 'center',
				width: labelViewWidth,
				height: '40%',
				backgroundColor: 'white',
				marginTop: '10%'}}>

				{label_balls}	
			</View>
		</View>
	</Modal>

	)
}