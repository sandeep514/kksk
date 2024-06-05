import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { View } from 'react-native';
import { h3, h4, padding1, paddingHorizontal1, paddingHorizontal2, paddingVertical1, primaryColor, secondryBackgroundColor, secondryColor } from '../../res/assets/css/style';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Footer(): React.JSX.Element {

    const navigation = useNavigation();

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
                <Pressable onPress={() => { navigation.navigate('Dashboard') }} style={[{ borderRadius: 100 }, paddingHorizontal2,paddingVertical1]}>
                    <Icon name="home" color={secondryColor} size={responsiveScreenHeight(3)} />
                    <Text style={[{ color: secondryColor }, h3]}>Home</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate('Dashboard') }} style={[{}, padding1]}>
                    <Icon name="home" size={responsiveScreenHeight(3)} />
                    <Text style={[{ color: secondryColor }, h3]}>Home</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate('Dashboard') }} style={[{}, padding1]}>
                    <Icon name="home" size={responsiveScreenHeight(3)} />
                    <Text style={[{ color: secondryColor }, h3]}>Home</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate('Profile') }} style={[{}, padding1]}>
                    <Icon name="user" type='font-awesome' size={responsiveScreenHeight(3)} />
                    <Text style={[{ color: secondryColor }, h3]}>Profile</Text>
                </Pressable>
                <Pressable onPress={() => { AsyncStorage.clear(),navigation.navigate('Login') }} style={[{}, padding1]}>
                    <Icon name="lock" size={responsiveScreenHeight(3)} color="red"/>
                    <Text style={[{ color: secondryColor }, h3]}>Logout</Text>
                </Pressable>
            </View >
        </View >
    );
}


export default Footer;
