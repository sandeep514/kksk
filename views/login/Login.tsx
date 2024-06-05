import React, { useState } from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import {
    height100,
    height2,
    height20,
    height30,
    height40,
    height60,
    height70,
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
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ navigation }): React.JSX.Element {
    const [postedData, setPostedData] = useState({});
    const [showError, setShowError] = useState('');
    const [showLoader, setShowLoader] = useState(false);

    const saveLogin = () => {
        setShowError('')
        setShowLoader(true)
        if (postedData.email && postedData.password) {
            post('login', postedData).then((res) => {
                console.log(res.data.user)
                AsyncStorage.setItem('userDetails', JSON.stringify(res.data.user));
                ShowToast('Login success')
                navigation.navigate('Dashboard')
            }).catch((err) => {

            }).finally(() => {
                setShowLoader(false)
            })
        } else {
            ShowToast('Required fields are missing')
            setShowError('Required fields are missing');
            setShowLoader(false)

        }
    }
    return (
        <SafeAreaView style={[{}]}>
            <StatusBar
                backgroundColor={secondryColor}
            />
            <View style={[{backgroundColor: '#fff'}, height100]}>
                <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                       
                        <View style={[{ justifyContent: 'center', alignSelf: 'center', },height40]}>
                            <Image source={require('../../res/assets/images/LOGO.jpeg')} resizeMode='center' />
                        </View>
                        <View style={[{}, paddingHorizontal5,height60]}>
                            <View>
                                <InputComponent placeholder={'Email'} onChange={(event) => { setPostedData((prevState) => (
                                    { ...prevState , email : event }
                                )) }} />
                            </View>
                            <View>
                                <InputComponent placeholder={'Password'} onChange={(event) => { setPostedData((prevState) => (
                                    { ...prevState , password : event }
                                )) }} />
                            </View>
                            <View>
                                <Text style={[{color: 'red',textAlign: 'center'},paddingVertical2]}>{showError}</Text>
                            </View>
                            <View>
                                {(showLoader) ?
                                    <View>
                                        <View>
                                            <ActivityIndicator />
                                        </View>
                                    </View>
                                    :
                                    <ButtonComponent title={'Submit'} onClick={() => { saveLogin() }} />
                                }
                                
                            </View>

                        </View>

                    </View>

                </KeyboardAvoidingView>

            </View>
            <View style={[{}, height2, primaryBackgroundColor]}>

            </View>
        </SafeAreaView>
    );
}

export default Login