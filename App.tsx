

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
function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';
	
	return (

		<NavigationContainer>
				<Drawer.Navigator screenOptions={{ headerShown: false }}>
					<Drawer.Screen name="AppNavigator" component={AppNavigator} />
					<Drawer.Screen name="Quality Master" component={ListQuality} />
					<Drawer.Screen name="Sub Quality Master" component={ListSubQuality} />
					<Drawer.Screen name="User Master" component={ListUser} />
					<Drawer.Screen name="Misc Master" component={ListMisc} />
					<Drawer.Screen name="Grade Master" component={ListGrade} />
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