import React from 'react';

import { h2, h3, height1, marginBottom2, Medium } from '../../../res/assets/css/style'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Image } from 'react-native';

function LoadingComponent({ }): React.JSX.Element {

    return (
        <View style={{ position: 'absolute', zIndex: 99999, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
            <View style={{ width: '100%', alignItems: 'center', backgroundColor: '#f2f2f2', height: 300, justifyContent: 'center' }}>
                <Image source={require('../../../res/assets/images/loading-the-truck.gif')} style={{ width: '100%', height: 250 }} resizeMode='stretch' />
                <Text style={[h3, {}]}>Loading ....</Text>
            </View>
        </View>
    );
}

export default LoadingComponent