import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, Pressable, ActivityIndicator } from 'react-native';


import { Bold, h3, padding1, paddingBottom1, paddingHorizontal15, primaryColor, secondryButton } from '../../../res/assets/css/style';
import { Text } from '@rneui/base';
import { ShowToast, post } from '../../components/apiComponent';
import Layout from '../../layout/Layout';
import DropdownComponent from '../../components/DropdownComponent';
import InputComponent from '../../components/InputComponent/Index';
import { useFocusEffect } from '@react-navigation/native';


function EditUser({ navigation, route }): React.JSX.Element {
    const [loader, setLoader] = useState(false);

    const [role, setRole] = useState();
    const [userRole, setUserRole] = useState();
    const [userid, setUserId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [gstNo, setGstNo] = useState('');
    const [password, setPassword] = useState();

    const [error, setError] = useState('');
    const [data, setData] = useState();

    useFocusEffect(useCallback(() => {
        // setRole(route.params.role)
        setData(route.params.details)
        console.log("--------------");
        console.log(route.params.details)

        setName(route.params.details?.name);
        setEmail(route.params.details?.email);
        setMobile(route.params.details?.mobile);
        setAddress(route.params.details?.address);
        setGstNo(route.params.details?.gst_no);
        setUserRole(route.params.details?.role);
    }, []));

    const saveUser = () => {
        setError('');
        if (name && email && mobile && address) {
            setLoader(true)
            let postedData = {
                'id': data?.id, 'name': name, 'email': email, 'password': password, 'mobile': mobile, 'address': address, 'role': userRole, 'gst_no': gstNo
            };

            // POST Method
            post('update/user', (postedData)).then((res) => {
                console.log(res)
                if (res.data.status == 'error') {
                    setError(res.data.message)
                } else {
                    ShowToast(res.data.message);
                    navigation.navigate('ListUser');
                }
            }).catch((err) => {
                console.log('err')
                console.log(err)
                setError(err.data.message)
            }).finally(() => {
                setLoader(false)
            })
        } else {
            setError('Require fields are missing.');
        }
    }

    return (
        <Layout>
            <View>
                <View>
                    <View style={{}}>
                        <ScrollView>
                            {/* <DropdownComponent defaultValue={ } items={role} placeholder={'Role'} listname={'role_name'} selectedItem={(event, index) => {
                                setUserRole(event.id)
                            }} /> */}

                            <InputComponent value={data?.role_rel?.role_name} placeholder={'Role'} editable={false} />
                            <InputComponent value={name} placeholder={'Name'} onChange={(value) => { setName(value) }} />
                            <InputComponent value={email} placeholder={'Email'} onChange={(value) => { setEmail(value) }} />
                            <InputComponent value={mobile} placeholder={'Mobile'} onChange={(value) => { setMobile(value) }} />
                            <InputComponent value={address} placeholder={'Address'} onChange={(value) => { setAddress(value) }} />
                            <InputComponent value={gstNo} placeholder={'GST'} onChange={(value) => { setGstNo(value) }} />
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

export default EditUser;