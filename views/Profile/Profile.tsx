import React from 'react';
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

function Profile(): React.JSX.Element {

    return (
        <Layout >
            <View style={[{ justifyContent: 'center',flex: 1 }]}>
                <View>
                    {/* <View style={{ justifyContent: 'center', alignSelf: 'center', }}>
                        <Image source={require('../../res/assets/images/sifti_rice_mills_logo.jpeg')} />
                    </View> */}
                    <View style={[{}, paddingHorizontal5]}>
                        <View>
                            <InputComponent placeholder={'Name'} onChange={(event) => { console.log(event) }} />
                        </View>
                        <View>
                            <InputComponent placeholder={'Mobile'} onChange={(event) => { console.log(event) }} />
                        </View>
                        <View>
                            <InputComponent placeholder={'Business Name'} onChange={(event) => { console.log(event) }} />
                        </View>
                        <View>
                            <InputComponent placeholder={'Business Email'} onChange={(event) => { console.log(event) }} />
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
        </Layout >
    );
}

export default Profile