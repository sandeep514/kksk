import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import {
    height100,
    height2,
    paddingHorizontal5,
    paddingVertical2,
    primaryBackgroundColor,
    primaryColor,
    secondryColor,
} from '../../res/assets/css/style';
import InputComponent from '../components/InputComponent/Index';
import ButtonComponent from '../components/ButtonComponent/Index';
import { ShowToast, post } from '../components/apiComponent';
import { Text } from '@rneui/base';

function Register({ navigation }): React.JSX.Element {
    const [postedData, setPostedData] = useState({});
    const [showError, setShowError] = useState('');

    const RegisterUser = () => {
        navigation.navigate('Dashboard')
        // setShowError('')
        // if (postedData.email && postedData.password) {
        //     post('', postedData).then((res) => {
        //         navigation.navigate('Dashbaord')
        //     }).catch((err) => {

        //     })
        // } else {
        //     ShowToast('Required fields are missing')
        //     setShowError('Required fields are missing');
        // }
    }
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
                                            <InputComponent placeholder={'Name'} onChange={(event) => {
                                                setPostedData((prevState) => (
                                                    { ...prevState, name: event }
                                                ))
                                            }} />
                                        </View>
                                        <View>
                                            <InputComponent placeholder={'Email'} onChange={(event) => {
                                                setPostedData((prevState) => (
                                                    { ...prevState, email: event }
                                                ))
                                            }} />
                                        </View>
                                        <View>
                                            <InputComponent placeholder={'Company Name'} onChange={(event) => {
                                                setPostedData((prevState) => (
                                                    { ...prevState, coumpanyName: event }
                                                ))
                                            }} />
                                        </View>
                                        <View>
                                            <InputComponent placeholder={'Mobile'} onChange={(event) => {
                                                setPostedData((prevState) => (
                                                    { ...prevState, mobile: event }
                                                ))
                                            }} />
                                        </View>
                                        <View>
                                            <InputComponent placeholder={'Password'} onChange={(event) => {
                                                setPostedData((prevState) => (
                                                    { ...prevState, password: event }
                                                ))
                                            }} />
                                        </View>
                                        <View>
                                            <Text style={[{ color: 'red', textAlign: 'center' }, paddingVertical2]}>{showError}</Text>
                                        </View>
                                        <View>
                                            <ButtonComponent title={'Submit'} onClick={() => { saveLogin() }} />
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

export default Register