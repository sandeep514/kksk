import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../login/Login';
import Dashboard from '../Dashboard/Dashboard';
import ListQuality from '../masters/qualityMaster/List';
import AddQuality from '../masters/qualityMaster/Add';
import ListSubQuality from '../masters/subQualityMaster/List';
import AddSubQuality from '../masters/subQualityMaster/Add';
import ListUser from '../masters/User/List';
import AddUser from '../masters/User/Add';
// import ListPriceEnquiries from '../Enquires/PriceEnquiries';
import listMisc from '../masters/misc/List';
import AddMisc from '../masters/misc/Add';
import listGrade from '../masters/grade/List';
import AddGrade from '../masters/grade/Add';
import PriceEnquiryView from '../PriceEnquiry/View';
import ListPriceEnquiry from '../PriceEnquiry/List';
import PriceEnquiry from '../PriceEnquiry/Index';
import RequestSample from '../RequestSample/Index';
import RequestSampleView from '../RequestSample/View';
import ListRequestSample from '../RequestSample/List';
import Profile from '../Profile/Profile';
import Notification from '../Notification/Notification';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import ListPriceEnquiries from '../PriceEnquiry/List';
import SampleFromAdmin from '../SampleFromAdmin/Index';
import SampleFromAdminView from '../SampleFromAdmin/View';
import ListSampleFromAdmin from '../SampleFromAdmin/List';


const Stack = createNativeStackNavigator();

function AppNavigator(): React.JSX.Element {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="ListPurchase" component={ListPurchase} /> */}

            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

            <Stack.Screen name="ListPriceEnquiries" component={ListPriceEnquiries} />

            <Stack.Screen name="ListQuality" component={ListQuality} />
            <Stack.Screen name="AddQuality" component={AddQuality} />

            <Stack.Screen name="ListMisc" component={listMisc} />
            <Stack.Screen name="AddMisc" component={AddMisc} />

            <Stack.Screen name="ListGrade" component={listGrade} />
            <Stack.Screen name="AddGrade" component={AddGrade} />

            <Stack.Screen name="ListSubQuality" component={ListSubQuality} />
            <Stack.Screen name="AddSubQuality" component={AddSubQuality} />

            <Stack.Screen name="ListUser" component={ListUser} />
            <Stack.Screen name="AddUser" component={AddUser} />


            <Stack.Screen name="PriceEnquiry" component={PriceEnquiry} />
            <Stack.Screen name="PriceEnquiryView" component={PriceEnquiryView} />
            <Stack.Screen name="ListPriceEnquiry" component={ListPriceEnquiry} />

            <Stack.Screen name="RequestSample" component={RequestSample} />
            <Stack.Screen name="RequestSampleView" component={RequestSampleView} />
            <Stack.Screen name="ListRequestSample" component={ListRequestSample} />

            <Stack.Screen name="SampleFromAdmin" component={SampleFromAdmin} />
            <Stack.Screen name="SampleFromAdminView" component={SampleFromAdminView} />
            <Stack.Screen name="ListSampleFromAdmin" component={ListSampleFromAdmin} />

            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    );
}


export default AppNavigator;