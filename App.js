import React from 'react';
import { StyleSheet, StatusBar, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import { Notification } from 'react-native-in-app-message';

class App extends React.Component {

	render() {
		return (
			<ImageBackground source={{uri: 'sky'}} style={styles.container}>
				<StatusBar barStyle={'light-content'} />
				<TouchableOpacity style={styles.button} onPress={() => Notification.show()}>
					<Text style={styles.buttonText}>Press me</Text>
				</TouchableOpacity>
				<Notification customComponent={
					<View style={styles.customView}>
						<Text>Custom View!</Text>
					</View>
				} textColor={'#ccc'} showKnob={false} text={'Hello world'} />
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
});

export default App;
