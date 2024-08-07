import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, Pressable, ActivityIndicator } from 'react-native';


import { Bold, h3, padding1, paddingBottom1, paddingHorizontal15, primaryColor, secondryButton } from '../../../res/assets/css/style';
import { Text } from '@rneui/base';
import { ShowToast, post } from '../../components/apiComponent';
import Layout from '../../layout/Layout';
import DropdownComponent from '../../components/DropdownComponent';
import InputComponent from '../../components/InputComponent/Index';
import { useFocusEffect } from '@react-navigation/native';


function AddUser({ navigation, route }): React.JSX.Element {
    const [loader, setLoader] = useState(false);

    const [role, setRole] = useState();
    const [userRole, setUserRole] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    const [gstNo, setGstNo] = useState();
    const [password, setPassword] = useState();

    const [error, setError] = useState('');

    useFocusEffect(useCallback(() => {
        setRole(route.params.role)
    }, []));

    const saveUser = () => {
        setError('');
        if (name && email && mobile && address && password) {
            setLoader(true)
            let postedData = {
                'name': name, 'email': email, 'password': password, 'mobile': mobile, 'address': address, 'role': userRole, 'gst_no': gstNo
            };

            // POST Method
            post('create/user', (postedData)).then((res) => {
                if (res.data.status == 'error') {
                    setError(res.data.message)
                } else {
                    ShowToast(res.data.message);
                    navigation.navigate('ListUser');
                }
            }).catch((err) => {
                console.log('err')
                setError(err.data.message)
            }).finally(() => {
                setLoader(false)
            })
        } else {
            setError('Require fields are missing.');
        }
    }

    return (
        <Layout >
            <View>
                <View>
                    <View style={{}}>
                        <ScrollView>
                            <DropdownComponent items={role} placeholder={'Role'} listname={'role_name'} selectedItem={(event, index) => {
                                setUserRole(event.id)
                            }} />

                            <InputComponent placeholder={'Name'} onChange={(value) => { setName(value) }} />

                            <InputComponent placeholder={'Email'} onChange={(value) => { setEmail(value) }} />

                            <InputComponent placeholder={'Mobile'} onChange={(value) => { setMobile(value) }} />

                            <InputComponent placeholder={'Address'} onChange={(value) => { setAddress(value) }} />

                            <InputComponent placeholder={'GST'} onChange={(value) => { setGstNo(value) }} />
                            <InputComponent placeholder={'Password'} onChange={(value) => { setPassword(value) }} />

                            {(error.length > 0) ?
                                <View>
                                    <Text style={[h3, paddingBottom1, { color: 'red', textAlign: 'center' }]}>{error}</Text>
                                </View>
                                : null
                            }

                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>

                                {(!loader) ?
                                    <Pressable onPress={() => { saveUser() }} style={[{}, secondryButton, paddingHorizontal15]}>
                                        <Text style={[{ color: primaryColor }, h3, Bold]}>Submit</Text>
                                    </Pressable>
                                    :
                                    <View style={[{}, secondryButton, paddingHorizontal15]}>
                                        <Text style={[{ color: primaryColor }, h3, Bold]}><ActivityIndicator /></Text>
                                    </View>
                                }

                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </Layout>
    );
}

export default AddUser;