import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useColorScheme, View, Pressable, Text } from 'react-native';
import { Bold, h2, padding1, secondryColor } from '../../res/assets/css/style';
import { Icon } from '@rneui/base';
import { useRoute } from '@react-navigation/native';

function Header(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation();
    const route = useRoute();
    const [currentRoute, setCurrentRoute] = useState();

    useEffect(() => {
        var routeName = route.name;
        var result = routeName.replace(/([A-Z])/g, " $1");
        var currentRut = result.charAt(0).toUpperCase() + result.slice(1);
        setCurrentRoute(currentRut)
    }, [])

    return (
        <View>
            <View style={[{ borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }, padding1]}>

                <View>
                    <Pressable onPress={() => { navigation.goBack() }} style={{padding:10}}>
                        <Icon name="chevron-left" color={'#000'} size={25} />
                    </Pressable>
                </View>

                <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={[h2, Bold, { color: '#000' }]}>{currentRoute}</Text>
                </View>
                
                <View style={{ padding: 10, }}>
                    <Pressable onPress={() => { navigation.navigate('Notification') }} >
                        <Icon name="notifications" color={'#000'} size={25} />
                            <View style={{ borderBottomColor: secondryColor, borderBottomWidth: 3, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                        </View>
                    </Pressable>
                </View>

            </View>
            

        </View>
    );
}


export default Header;