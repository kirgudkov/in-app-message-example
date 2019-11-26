import React from 'react';
import { StyleSheet, StatusBar, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { Notification } from 'react-native-in-app-message';

class App extends React.Component {

	render() {
		return (
			<ImageBackground source={{uri: 'sky'}} style={styles.container}>
				<StatusBar barStyle={'light-content'} />
				<TouchableOpacity style={styles.button} onPress={() => Notification.show()}>
					<Text style={styles.buttonText}>Press me</Text>
				</TouchableOpacity>
				<Notification textColor={'#ccc'} text={'Hello world'} />
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
});

export default App;
