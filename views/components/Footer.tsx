import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { View } from 'react-native';
import { h4, padding1, primaryColor, secondryBackgroundColor, secondryColor } from '../../res/assets/css/style';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';


function Footer(): React.JSX.Element {

    const navigation = useNavigation();

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
                <Pressable onPress={() => { navigation.navigate('Dashboard') }} style={[{ borderRadius: 10 }, padding1, secondryBackgroundColor]}>
                    <Icon name="home" color={primaryColor} size={responsiveScreenHeight(3)} />
                    <Text style={[{ color: primaryColor }, h4]}>Home</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate('Dashboard') }} style={[{}, padding1]}>
                    <Icon name="home" size={responsiveScreenHeight(3)} />
                    <Text style={[{ color: secondryColor }, h4]}>Home</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate('Dashboard') }} style={[{}, padding1]}>
                    <Icon name="home" size={responsiveScreenHeight(3)} />
                    <Text style={[{ color: secondryColor }, h4]}>Home</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate('Dashboard') }} style={[{}, padding1]}>
                    <Icon name="home" size={responsiveScreenHeight(3)} />
                    <Text style={[{ color: secondryColor }, h4]}>Home</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.openDrawer() }} style={[{}, padding1]}>
                    <Icon name="menu" size={responsiveScreenHeight(3)} />
                    <Text style={[{ color: secondryColor }, h4]}>Menu</Text>
                </Pressable>
            </View >
        </View >
    );
}


export default Footer;
