import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Bold, h3, paddingHorizontal15, primaryColor, secondryButton } from '../../../res/assets/css/style';
import { useNavigation } from '@react-navigation/native';
function ButtonComponent(): React.JSX.Element {

    const navigation = useNavigation();
    return (
        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <Pressable onPress={() => { navigation.navigate('Dashboard') }} style={[{}, secondryButton, paddingHorizontal15]}>
                <Text style={[{ color: primaryColor }, h3, Bold, {color: '#fff'}]}>Submit</Text>
            </Pressable>
        </View>
    );
}

export default ButtonComponent