import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useColorScheme, View, Pressable, Text } from 'react-native';
import { Bold, h2, h3, h4, padding1, primaryColor, secondryColor } from '../../res/assets/css/style';
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
                        <Icon name="chevron-left" color={secondryColor} />
                    </Pressable>
                </View>
                <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={[h2, Bold, { color: secondryColor }]}>{currentRoute}</Text>
                </View>
                <View style={{ padding: 10 }}>
                    <Icon name="notifications" color={secondryColor} />
                </View>
            </View>

        </View>
    );
}


export default Header;
