import React from 'react';
import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import {
    height100,
    height2,
    paddingHorizontal5,
    primaryBackgroundColor,
    primaryColor,
    secondryColor,
} from '../../res/assets/css/style';
import InputComponent from '../components/InputComponent/Index';
import ButtonComponent from '../components/ButtonComponent/Index';

function Login(): React.JSX.Element {

    return (
        <SafeAreaView style={[{}]}>
            <StatusBar
                backgroundColor={secondryColor}
            />
            <View style={[{}, height100, primaryBackgroundColor]}>
                <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <ScrollView style={[{}]} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                            <View style={[{ justifyContent: 'center' }]}>
                                <View>
                                    {/* <View style={{ justifyContent: 'center', alignSelf: 'center', }}>
                                        <Image source={require('../../res/assets/images/sifti_rice_mills_logo.jpeg')} />
                                    </View> */}
                                    <View style={[{}, paddingHorizontal5]}>
                                        <View>
                                            <InputComponent placeholder={'Email'} onChange={(event) => { console.log(event) }} />
                                        </View>
                                        <View>
                                            <InputComponent placeholder={'Password'} onChange={(event) => { console.log(event) }} />
                                        </View>
                                        <View>
                                            <ButtonComponent title={'Submit'} onClick={(value) => { console.log(value)  }} />
                                        </View>

                                    </View>

                                </View>
                            </View>
                        </ScrollView>
                    </View>

                </KeyboardAvoidingView>

            </View>
            <View style={[{}, height2, primaryBackgroundColor]}>

            </View>
        </SafeAreaView>
    );
}

export default Login