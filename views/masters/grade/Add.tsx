import React, { useEffect, useState } from 'react';
import { View, ScrollView, Pressable, ActivityIndicator } from 'react-native';


import { Bold, h3, padding1, paddingBottom1, paddingHorizontal15, primaryColor, secondryBackgroundColor, secondryButton } from '../../../res/assets/css/style';
import { Text } from '@rneui/base';
import { ShowToast, post } from '../../components/apiComponent';
import Layout from '../../layout/Layout';
import DropdownComponent from '../../components/DropdownComponent';
import InputComponent from '../../components/InputComponent/Index';


function AddGrade({ navigation }): React.JSX.Element {





    const [riceType, setRiceType] = useState('basmati');
    const [quality, setQuality] = useState('');
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(false);


    const submitPurchaseOrder = () => {
        setError('');
        if (quality.length > 0) {
            setLoader(true)
            let postedData = {
                'riceType': riceType, 'quality': quality
            };

            // POST Method
            post('create/qualities', (postedData)).then((res) => {
                console.log('res')
                console.log(res)
                if (res.data.status == 'error') {
                    setError(res.data.message)
                } else {
                    ShowToast("Quality added successfully");
                    navigation.navigate('ListQuality');
                }

            }).catch((err) => {
                setError(err.data.message);
                console.log('err')
                console.log(err)
            }).finally(() => {
                setLoader(false)
            })
        } else {
            console.log('Require fields are missing.');
        }
    }

    return (
        <Layout >
            <View>
                <View>
                    <View style={{}}>
                        <ScrollView>
                            {/* <DropdownComponent items={[{ 'id': 1, 'name': 'basmati' }, { 'id': 2, 'name': 'non-basmati' }]} placeholder={riceType} listname={'name'} selectedItem={(event, index) => {
                                setRiceType(event.name)
                            }} /> */}

                            <InputComponent placeholder={'Grade'} onChange={(value) => { setQuality(value) }} />

                            {(error.length > 0) ?
                                <View>
                                    <Text style={[{ color: 'red', textAlign: 'center' }, h3, paddingBottom1]}>{error}</Text>
                                </View>
                                : null
                            }

                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                {(!loader) ?
                                    <Pressable onPress={() => { submitPurchaseOrder() }} style={[{}, secondryButton, paddingHorizontal15]}>
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

export default AddGrade;