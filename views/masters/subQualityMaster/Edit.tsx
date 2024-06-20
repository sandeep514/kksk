import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, Pressable, ActivityIndicator } from 'react-native';


import { Bold, h3, padding1, paddingBottom1, paddingHorizontal15, primaryColor, secondryBackgroundColor, secondryButton } from '../../../res/assets/css/style';
import { Text } from '@rneui/base';
import { ShowToast, post } from '../../components/apiComponent';
import Layout from '../../layout/Layout';
import DropdownComponent from '../../components/DropdownComponent';
import InputComponent from '../../components/InputComponent/Index';
import { useFocusEffect } from '@react-navigation/native';


function EditProcessQuality({ navigation, route }): React.JSX.Element {





    const [riceType, setRiceType] = useState('basmati');
    const [quality, setSubQuality] = useState('');
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(false);

    useFocusEffect(
        useCallback(() => {
            console.log(route.params.details)
            setRiceType(route.params.details?.type)
            setSubQuality(route.params.details?.form_name)
        }, [])
    )
    const submitPurchaseOrder = () => {
        setError('');
        if (quality.length > 0) {
            setLoader(true)
            let postedData = {
                'id': route.params.details?.id, 'riceType': riceType, 'quality': quality
            };

            // POST Method
            post('update/sub/qualities', (postedData)).then((res) => {
                console.log(res)
                if (res.data.status == 'error') {
                    setError(res.data.message)
                } else {
                    ShowToast("Sub quality updated successfully");
                    navigation.navigate('ListProcessQuality');
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
                            <DropdownComponent defaultValue={riceType} items={[{ 'id': 1, 'name': 'basmati' }, { 'id': 2, 'name': 'non-basmati' }]} placeholder={riceType} listname={'name'} selectedItem={(event, index) => {
                                setRiceType(event.name)
                            }} />

                            <InputComponent placeholder={'Quality'} value={quality} onChange={(value) => { setSubQuality(value) }} />

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

export default EditProcessQuality;