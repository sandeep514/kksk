

import React, { useEffect, useState } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from './views/layout/AppNavigator';

import ListRequestSample from './views/RequestSample/List';
import ListQuality from './views/masters/qualityMaster/List';
import ListSubQuality from './views/masters/subQualityMaster/List';
import ListMisc from './views/masters/misc/List';
import ListUser from './views/masters/User/List';
import ListGrade from './views/masters/grade/List';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Drawer = createDrawerNavigator();
import messaging from '@react-native-firebase/messaging';
import { post } from './views/components/apiComponent';
import { Notifications } from 'react-native-notifications';
import EditUser from './views/masters/User/Edit';

function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';
	useEffect(() => {
		getFMNToken()
	}, [])
	async function getFMNToken() {
		console.log("lmlk");
		let fcmToken = await AsyncStorage.getItem('fcmToken');
		await messaging().registerDeviceForRemoteMessages();

		try {
			if (fcmToken == null) {
				const token = await messaging().getToken();
				AsyncStorage.setItem('fcmToken', await messaging().getToken())
				updateUserToken(fcmToken);
				notificationListner()
				console.log("i am here3");
			} else {
				console.log(fcmToken);
				updateUserToken(fcmToken);
				notificationListner()
				console.log("i am here2");
			}
		} catch (error) {

		}
	}
	const updateUserToken = (token) => {
		AsyncStorage.getItem('userDetails').then((res) => {
			if (res != undefined && res != null) {
				let postedData = {
					id: JSON.parse(res).id,
					token: token
				}
				console.log(postedData)
				post('update/user/token', postedData).then((res) => {
					console.log(res)
				}).catch((err) => {
					console.log(err)
				});
			}
		}).catch((err) => {

		});
	}
	const notificationListner = () => {
		return new Promise((resolve, reject) => {
			messaging().onNotificationOpenedApp(remoteMessage => {
				console.log("hi");
				console.log(remoteMessage)
				// console.log('Notification caused app to open from background state:',remoteMessage.notification);
			});

			// Check whether an initial notification is available
			messaging().getInitialNotification().then(remoteMessage => {
				if (remoteMessage) {
					// Notifications.registerRemoteNotifications();
					// Notifications.postLocalNotification({
					// 	identifier: '0',
					// 	body: 'Local notification!',
					// 	title: 'Local Notification Title',
					// 	sound: 'chime.aiff',
					// 	badge: 0,
					// 	type: '',
					// 	thread: '',
					// 	payload: {
					// 		category: 'SOME_CATEGORY',
					// 		link: 'localNotificationLink',
					// 		android_channel_id: 'my-channel',
					// 	}
					// });
					// console.log('Notification caused app to open from quit state:',remoteMessage.notification);
				}
				console.log("hierfr");

			});
			messaging().onMessage(async remoteMessage => {
				resolve(remoteMessage)
				console.log("hifrefrf");
				console.log(remoteMessage);
				// Notifications.postLocalNotification({
				// 	identifier: '0',
				// 	body: 'Local notification!',
				// 	title: 'Local Notification Title',
				// 	sound: 'chime.aiff',
				// 	badge: 0,
				// 	type: '',
				// 	thread: '',
				// 	payload: {
				// 		category: 'SOME_CATEGORY',
				// 		link: 'localNotificationLink',
				// 		android_channel_id: 'my-channel',
				// 	}
				// });
			});
		})

	}
	return (

		<NavigationContainer>
			<Drawer.Navigator screenOptions={{ headerShown: false }}>
				<Drawer.Screen name="AppNavigator" component={AppNavigator} />
				<Drawer.Screen name="Quality Master" component={ListQuality} />
				<Drawer.Screen name="Process Master" component={ListSubQuality} />
				<Drawer.Screen name="User Master" component={ListUser} />
				<Drawer.Screen name="User Edit Master" component={EditUser} />
				<Drawer.Screen name="Misc Master" component={ListMisc} />
				<Drawer.Screen name="Sub Quality Master" component={ListGrade} />
				{/* <Drawer.Screen name="Price Enquiry" component={ListPriceEnquiries} /> */}
				<Drawer.Screen name="Sample Request" component={ListRequestSample} />

				{/* <Drawer.Screen name="Sample Request" component={adminappsample} /> */}
				{/* <Drawer.Screen name="Home" component={Dashboard} /> */}
				{/* <Drawer.Screen name="Purchase" component={Purchase} /> */}

				{/* <Drawer.Screen name="PriceEnquiryView" component={PriceEnquiryView} />
				<Drawer.Screen name="ListPriceEnquiry" component={ListPriceEnquiry} />
				<Drawer.Screen name="RequestSample" component={RequestSample} />
				<Drawer.Screen name="RequestSampleView" component={RequestSampleView} />
				<Drawer.Screen name="ListRequestSample" component={ListRequestSample} /> */}

			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default App;