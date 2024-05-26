import React, { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import {
    height100,
    height2,
    paddingHorizontal5,
    primaryBackgroundColor,
    primaryColor,
} from '../../res/assets/css/style';
import InputComponent from '../components/InputComponent/Index';
import ButtonComponent from '../components/ButtonComponent/Index';
import Layout from '../layout/Layout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShowToast, post } from '../components/apiComponent';

function Profile(): React.JSX.Element {
    const [userData, setUserData] = useState({});
    const [loader , setLoader] = useState(false)
    useEffect(() => {
        AsyncStorage.getItem('userDetails').then((userData) => {
            console.log('rest')
            console.log(JSON.parse(userData))
            setUserData(JSON.parse(userData))
        })
    }, [])
    
    const updateProfileDetails = () => {
        setLoader(true)

        post('update/user/profile', userData).then((res) => {
            AsyncStorage.setItem('userDetails' , JSON.stringify(res.data.data))
            console.log(res)
            ShowToast(res.data.message)
        }).catch((err) => {

        }).finally(() => {
            setLoader(false)
        })
    }
    return (
        <Layout >
            <View style={[{ justifyContent: 'center',flex: 1 }]}>
                <View>
                    {/* <View style={{ justifyContent: 'center', alignSelf: 'center', }}>
                        <Image source={require('../../res/assets/images/sifti_rice_mills_logo.jpeg')} />
                    </View> */}
                    <View style={[{}, paddingHorizontal5]}>
                        <View>
                            <InputComponent value={userData?.name} editable={false} placeholder={'Name'} onChange={(event) => { setUserData((preState) => (
                                {...preState , 'name': event}
                            )) }} />
                        </View>
                        <View>
                            <InputComponent value={userData?.phone} placeholder={'Mobile'} onChange={(event) => { setUserData((preState) => (
                                {...preState , 'phone': event}
                            )) }} />
                        </View>
                        <View>
                            <InputComponent value={userData?.companyname} placeholder={'Business Name'} onChange={(event) => { setUserData((preState) => (
                                {...preState , 'companyname': event}
                            )) }} />
                        </View>
                        <View>
                            <InputComponent value={userData?.email} editable={false} placeholder={'Business Email'} onChange={(event) => { setUserData((preState) => (
                                {...preState , 'email': event}
                            )) }} />
                        </View>
                        <View>
                            <InputComponent placeholder={'Password'} onChange={(event) => { setUserData((preState) => (
                                { ...preState, 'password' : event}
                            )) }} />
                        </View>
                        <View>
                            <ButtonComponent title={'Submit'} onClick={(value) => { updateProfileDetails() }} />
                        </View>

                    </View>

                </View>
            </View>
        </Layout >
    );
}

export default Profile