import { useEffect, useMemo, useState, Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Button, Modal, Pressable } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Menu, MenuOptions, MenuOption, MenuProvider, MenuTrigger, renderers } from 'react-native-popup-menu';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import App from './ModalScreen'
import LabelScreen from './LabelScreen';

export function DefaultTimerView() {
	return (
		<View style={{
			justifyContent: 'center',
			alignItems: 'center',
			// backgroundColor: 'dodgerblue',
			width: 220,
			height: 220,
			borderRadius: 150
		}}>
			<Text style={{ fontSize: 17, color: '#fff' }}>
				Hit me
			</Text>
			<Text style={{ fontSize: 17, color: '#fff' }}>
				When you are distracted
			</Text>
		</View>
	)
}

export default function TimerScreen() {
	const quotes = ["Stay focused!",
		"Don't get distracted!",
		"Focus on your work!",
		"Stop dreaming!"]

	const labels = [{ name: "Unlabelled", colour: "#000" }];

	const [Key, setKey] = useState(0);
	const [WorkMode, setWorkMode] = useState(false);
	const [TimerRunning, setTimerRunning] = useState(false);
	const [DistractionCount, setDistractionCount] = useState(1);
	const [RemainingTime, setRemainingTime] = useState(0);
	const [CurrentQuoteIndex, setCurrentQuoteIndex] = useState(0);
	const [Duration, setDuration] = useState(0);
	const [TimerView, setTimerView] = useState(DefaultTimerView);
	const [ModalVisible, setModalVisible] = useState(false);
	const [LightenTimerScreen, setLightenTimerScreen] = useState(false);
	const [LabelScreenVisibile, setLabelScreenVisibile] = useState(false);
	const [CurrentLabel, setCurrentLabel] = useState(null);
	const [StopwatchTime, setStopwatchTime] = useState(0);

	const [Sessioncount, setSessioncounter] = useState(1);

	function updateCount() {
		if (CurrentQuoteIndex == 3) {
			setCurrentQuoteIndex(0);
		}
		else {
			setCurrentQuoteIndex(CurrentQuoteIndex => CurrentQuoteIndex + 1);
		}
		setDistractionCount(DistractionCount => DistractionCount + 1);
		setTimerView(
			<View style={{
				width: 220,
				height: 220,
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 300,
			}}>
				<Text style={{ fontSize: 50, color: '#fff' }}>{DistractionCount}</Text>
			</View>
		);
	}

	function renderTimerView(remainingTime) {
		useEffect(
			() => { setRemainingTime(remainingTime) },
			[remainingTime]
		);
		// RemainingTime = remainingTime;
		return (
			<TouchableOpacity onPress={() => TimerRunning ? updateCount() : null}
				activeOpacity={TimerRunning ? 0.2 : 1}>
				{TimerView}
			</TouchableOpacity>)
	}

	function formatRemainingTime(time) {
		let time_min = Math.floor(time / 60);
		let time_sec = time % 60;
		if (time_min < 10) {
			time_min = "0" + time_min.toString();
		}
		if (time_sec < 10) {
			time_sec = "0" + time_sec.toString();
		}
		return time_min + " : " + time_sec;
	}

	function getQuote() {
		if (WorkMode) {
			if (TimerRunning)
				return quotes[CurrentQuoteIndex];
			else
				return "Work paused!";
		}
		else {
			return "Beat Distractions";
		}
	}

	function timerHandler() {
		if (!WorkMode) {
			setModalVisible(!ModalVisible);
		}
		else {
			setTimerRunning(!TimerRunning);
		}
	}

	function breakHandler() {
		if (!WorkMode)
			setDuration(20);
		else
			if (TimerRunning) {
				setDuration(0);
				setRemainingTime(0);
				resetHandler();
			}
			else {
				resetHandler();
			}
	}

	function resetHandler() {
		setKey(Key => Key + 1);
		setTimerView(DefaultTimerView);
		setRemainingTime(10);
		setWorkMode(false);
		setTimerRunning(false);
		setDistractionCount(1);
	}

	function OnTimerComplete() {
		setTimerView(DefaultTimerView);
		setDistractionCount(1);
		resetHandler();
	}

	function renderLabelOptions() {
		let out = [];
		for (let i = 0; i < labels.length; i++) {
			out.push(
				<MenuOption key={i}
					onSelect={() => setCurrentLabel(labels[i].name)}>
					<View style={{ alignItems: 'center', flexDirection: 'row' }}>
						<View style={{ width: 7, height: 7, backgroundColor: 'red', borderRadius: 10, marginLeft: 10 }}></View>
						<Text style={{ fontSize: 15, padding: 20 }}>{labels[i].name}</Text>
					</View>
				</MenuOption>
			)
		}
		out.push(
			<MenuOption key={labels.length} onSelect={() => setLabelScreenVisibile(true)}>
				<View style={{ alignItems: 'center', flexDirection: 'row' }}>
					<View style={{ width: 7, height: 7, backgroundColor: 'white', borderRadius: 10, marginLeft: 10 }}></View>
					<Text style={{ fontSize: 15, padding: 20 }}>Add Label</Text>
				</View>
			</MenuOption>
		)
		return out;
	}

	return (
		<View style={{
			flex: 1,
			justifyContent: 'space-evenly',
			alignItems: 'center',
			opacity: LightenTimerScreen ? 0.5 : 1,
			backgroundColor: '#121212'
		}}>

			<Text style={{ fontSize: 16, color: '#fff' }}>{getQuote()}</Text>
			<Text style={{ fontSize: 40, color: '#fff' }}>{formatRemainingTime(RemainingTime)}</Text>

			<CountdownCircleTimer
				key={Key}
				isPlaying={TimerRunning}
				duration={Duration}
				colors={['grey']}
				rotation={'counterclockwise'}
				size={250}
				onComplete={OnTimerComplete}
				trailColor={'#121212'}
			>

				{({ remainingTime }) => renderTimerView(remainingTime)}

			</CountdownCircleTimer>
			<View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }}>

				<Pressable onPress={timerHandler}
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						width: '20%',
						height: 50,
						borderRadius: 100,
						borderWidth: 2,
						borderColor: 'grey'
					}}>
					<Text style={{ color: '#fff' }}>
						{WorkMode ? (TimerRunning ? "Pause" : "Resume") : "Timer"}
					</Text>
					{/* <Button title={WorkMode? (TimerRunning? "Pause":"Resume") : "Timer"} 
						
						style={{innerWidth: 100}} 
						/> */}
				</Pressable>

				<Pressable onPress={resetHandler}
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						width: '25%',
						height: 50,
						borderRadius: 100,
						borderWidth: 2,
						borderColor: 'grey'
					}}>
					<Text style={{ color: '#fff' }}>{WorkMode ? 'Abort' : 'Stopwatch'}</Text>
				</Pressable>
				{/* <Button title="Reset" onPress={resetHandler}/> */}
				<Pressable onPress={breakHandler}

					style={{
						justifyContent: 'center',
						alignItems: 'center',
						width: '20%',
						height: 50,
						borderRadius: 100,
						borderWidth: 2,
						borderColor: 'grey'
					}}>
					<Text style={{ color: '#fff' }}>{WorkMode ? "Skip" : "Break"}</Text>
				</Pressable>
				{/* <Button title={WorkMode? "Skip" : "Break"} onPress={breakHandler}/> */}
			</View>

			{/* <Modal
				animationType = 'slide'
				transparent = {false}
				visible = {LabelScreenVisibile}
				onRequestClose = {() => setLabelScreenVisibile(false)}
				// style={{backgroundColor: 'red'}}
				>
				{LabelScreen(LabelScreenVisibile, setLabelScreenVisibile)}
			</Modal> */}

			{LabelScreen(LabelScreenVisibile, setLabelScreenVisibile)}

			{App(ModalVisible,
				setModalVisible,
				Duration,
				setDuration,
				Sessioncount,
				setSessioncounter,
				setTimerRunning,
				setWorkMode,
				RemainingTime,
				formatRemainingTime,
				setRemainingTime)}

			<Menu
				renderer={renderers.SlideInMenu}
				style={{ position: 'absolute', bottom: 10, right: 30 }}
				onOpen={() => setLightenTimerScreen(true)}
				onClose={() => setLightenTimerScreen(false)}
			>

				<MenuTrigger style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ color: '#fff' }}>Unlabelled</Text>
					<MaterialCommunityIcons name="label-outline" color={'dimgrey'} size={20} style={{ marginLeft: 8, transform: [{ rotate: '180deg' }] }} />
				</MenuTrigger>
				<MenuOptions>
					{renderLabelOptions()}
					{/* <MenuOption>
						<Text style={{fontSize: 15, padding: 10}}>Unlabelled</Text>
					</MenuOption>
					<MenuOption>
						<Text style={{fontSize: 15, padding: 10}}>
								Add Label
						</Text>
					</MenuOption>
					<MenuOption onSelect={()=>console.log('test')}>
						<Text style={{fontSize: 15, padding: 10}}>
								Add Label 1
						</Text>
					</MenuOption> */}
				</MenuOptions>
			</Menu>


			{/* <TouchableOpacity 
				onPress={() => {
					setModalVisible(!ModalVisible);
					setLightenTimerScreen(!LightenTimerScreen);
				}}
				style={{position: 'absolute', bottom: 10, right: 30}}
				>
				<Text>Unlabelled</Text>
			</TouchableOpacity> */}

		</View>
	)
}