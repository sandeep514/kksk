import React, { memo, useCallback, useEffect, useState } from 'react';
import { View, ScrollView, Pressable, ActivityIndicator } from 'react-native';

import Layout from '../layout/Layout';
import DropdownComponent from '../components/DropdownComponent';
import InputComponent from '../components/InputComponent/Index';
import ButtonComponent from '../components/ButtonComponent/Index';
import { Bold, SemiBold, h2, h3, h4, h5, marginBottom2, marginTop2, padding1, padding2, padding3, paddingHorizontal1, paddingHorizontal15, paddingHorizontal2, paddingVertical1, paddingVertical2, primaryBackgroundColor, primaryColor, secondryBackgroundColor, secondryButton } from '../../res/assets/css/style';
import { Text } from '@rneui/base';
import PurchaseFormComponent from './component/PurchaseFormCOmponent';
import { ShowToast, get, post } from '../components/apiComponent';
import { useFocusEffect } from '@react-navigation/native';

function GatePassEntry({ navigation }): React.JSX.Element {

    const [selectedLoadingId, setSelectedLoadingId] = useState();
    const [gatePassNumber, setGatePassNumber] = useState();
    const [listLoadings, setListLoading] = useState('');
    const [error, setError] = useState('');
    const [showSaveLoader, setShowSaveLoader] = useState(false);

    useEffect(() => {
        getLoading();
    }, [])

    const getLoading = () => {
        get('get/loadings').then((res) => {
            setListLoading(res.data.data)
        }).catch((err) => {

        }).finally(() => {

        })
    }

    const submitGatepass = () => {
        setError('')
        if (selectedLoadingId && gatePassNumber) {
            setShowSaveLoader(true)
            let postedData = {
                'loadingId': selectedLoadingId, 'gatePassNumber': gatePassNumber
            };
            console.log("hello");
            post('save/gatepass', (postedData)).then((res) => {
                ShowToast(res.data.message)
                navigation.navigate('ListGatePassEntry');
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                setShowSaveLoader(true);
            })
        } else {
            setError('Required fields are missing.')
            ShowToast("Required fields are missing.")
        }
    }


    return (
        <Layout >
            <View>
                <View>
                    <ScrollView>
                        <DropdownComponent defaultValue={'Order'} items={listLoadings} placeholder={'List Loading'} listname={'loadingNumber'} selectedItem={(event, index) => {
                            setSelectedLoadingId(event.id)
                        }} />

                        <InputComponent editable={true} value={gatePassNumber} placeholder={'Gate Pass Number'} onChange={(value) => {
                            setGatePassNumber(value)
                        }} />

                        <View>
                            <Text style={[{}, h3, paddingVertical1, { color: 'red', textAlign: 'center' }]}>{error}</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            {(!showSaveLoader) ?
                                null
                                :
                                <View>
                                    <ActivityIndicator color={primaryColor} />
                                </View>
                            }
                            <Pressable onPress={() => { submitGatepass() }} style={[{}, secondryButton, paddingHorizontal15]}>
                                <Text style={[{ color: primaryColor }, h3, Bold]}>Submit</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Layout>
    );
}

export default memo(GatePassEntry);