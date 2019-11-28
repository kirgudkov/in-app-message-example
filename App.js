import React from 'react';
import { StyleSheet, StatusBar, Image, Platform, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import { Notification } from 'react-native-in-app-message';

const IS_IOS = Platform.OS === 'ios';
const notificationText = 'Hello World!';

class App extends React.Component {

	customNotification = React.createRef();
	customImageNotification = React.createRef();
	simpleNotification = React.createRef();

	handleOnCustomNotificationPressed = () => {
		this.customNotification?.current.show();
	};

	handleOnImageNotificationPressed = () => {
		this.customImageNotification?.current.show();
	};

	handleOnSimpleNotificationPressed = () => {
		this.simpleNotification?.current.show();
	};

	render() {
		return (
			<ImageBackground source={{uri: 'sky'}} style={styles.container}>
				<StatusBar translucent backgroundColor={'#ffffff33'} barStyle={'light-content'} />

				<TouchableOpacity style={styles.button} onPress={this.handleOnSimpleNotificationPressed}>
					<Text style={styles.buttonText}>Show simple notification</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={this.handleOnCustomNotificationPressed}>
					<Text style={styles.buttonText}>Show custom notification</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={this.handleOnImageNotificationPressed}>
					<Text style={styles.buttonText}>With image</Text>
				</TouchableOpacity>

				<Notification ref={this.customNotification} customComponent={
					<View style={IS_IOS ? styles.customView : styles.customViewAndroid}>
						<Text>Custom View!</Text>
					</View>
				} textColor={'#ccc'} showKnob={false} text={notificationText} />

				<Notification ref={this.customImageNotification} customComponent={
					<ImageBackground source={{uri: 'sky'}} style={IS_IOS ? styles.customView : styles.customViewAndroid}>
						<Text>Custom View!</Text>
						<Image style={styles.imageInner} source={{uri: 'sky'}} />
					</ImageBackground>
				} textColor={'#ccc'} showKnob={false} text={notificationText} />
				<Notification ref={this.simpleNotification} textColor={'#ccc'} text={notificationText} />
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#123',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
	},
	button: {
		marginBottom: 12,
		paddingVertical: 10,
		paddingHorizontal: 44,
		borderWidth: 1,
		borderRadius: 12,
		borderColor: '#fff',
	},
	customView: {
		backgroundColor: 'red',
		width: '100%',
		height: 300,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 16,
	},
	customViewAndroid: {
		backgroundColor: 'red',
		width: '102%',
		height: 300,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageInner: {
		borderRadius: 12,
		width: 100,
		height: 100,
	},
});

export default App;
