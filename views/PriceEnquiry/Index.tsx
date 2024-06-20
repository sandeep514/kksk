import React, { useEffect, useState } from 'react';
import { View, ScrollView, Pressable } from 'react-native';

import Layout from '../layout/Layout';
import DropdownComponent from '../components/DropdownComponent';
import InputComponent from '../components/InputComponent/Index';
import ButtonComponent from '../components/ButtonComponent/Index';
import { Bold, h3, padding1, paddingBottom1, paddingHorizontal15, primaryColor, secondryBackgroundColor, secondryButton } from '../../res/assets/css/style';
import { Text } from '@rneui/base';
import RequestSampleComponent from './component/RequestSampleComponent';
import { ShowToast, get, post } from '../components/apiComponent';
import { ActivityIndicator } from 'react-native';

function RequestSample({ navigation }): React.JSX.Element {
    const [formComponentCount, setFormComponentCount] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');

    const [additionalInfo, setAdditionalInfo] = useState("");
    const [riceName, setRiceName] = useState([]);
    const [riceForm, setriceForm] = useState([]);
    const [riceMisc, setRiceMisc] = useState([]);
    const [data, setData] = useState();


    useEffect(() => {
        getRiceName()
        getMiscData()

    }, [])



    const getRiceName = () => {
        //get/rice/name

        get('get/rice/name').then((res) => {
            setRiceName(res.data.riceName)
            setriceForm(res.data.riceForm)
        }).catch((err) => {
            console.log(err)
        })
    }
    const getMiscData = () => {
        //get/packing/data

        get('get/misc/data').then((res) => {
            setRiceMisc(res.data.misc)
        }).catch((err) => {
            console.log(err)
        })
    }


    const submitPriceEnquiry = () => {
        setError('')

        if (Object.keys(data).length == 5) {
            setLoader(true)
            // POST Method
            data['additionalInfo'] = additionalInfo;
            console.log('data')
            console.log(data)
            post('add/price/enquiry', (data)).then((res) => {
                console.log('port res');
                console.log(res)
                ShowToast('sample requested successfully')
                navigation.navigate('ListPriceEnquiries');
            }).catch((err) => {
                setError('Something went wrong')
            }).finally(() => {
                setLoader(false)
            })
        } else {
            setError('required fields are missing')
        }


    }
    return (
        <Layout >
            <View>
                <View>
                    <ScrollView>
                        <View style={{ marginBottom: 0, }}>
                            <View style={[{}]}>
                                <DropdownComponent defaultValue={data?.riceType?.name} items={[{ 'id': 0, 'name': 'Select any' }, { 'id': 1, 'name': 'basmati' }, { 'id': 2, 'name': 'non-basmati' }]} placeholder={'Rice Type'} listname={'name'} selectedItem={(event, index) => {
                                    setData((previousState) => (
                                        { ...previousState, riceType: event }
                                    ))
                                }} />

                                <DropdownComponent defaultValue={data?.riceName?.name} items={riceName[data?.riceType?.name]} placeholder={'Quality Name'} listname={'name'} selectedItem={(event, index) => {
                                    setData((previousState) => (
                                        { ...previousState, riceName: event }
                                    ))
                                }} />

                                <DropdownComponent defaultValue={data?.riceForm?.form_name} items={(data?.riceType) ? riceForm[data?.riceType?.name] : {}} placeholder={'Process Name'} listname={'form_name'} selectedItem={(event, index) => {
                                    setData((previousState) => (
                                        { ...previousState, riceForm: event }
                                    ))
                                }} />


                                <DropdownComponent defaultValue={data?.misc?.misc} items={riceMisc} placeholder={'Misc'} listname={'misc'} selectedItem={(event, index) => {
                                    setData((previousState) => (
                                        { ...previousState, misc: event }
                                    ))
                                }} />

                                <InputComponent keyboardType={'numeric'} value={data?.quantity} placeholder={'Estimate Quantity'} onChange={(event) => {
                                    setData((previousState) => (
                                        { ...previousState, quantity: event }
                                    ))
                                }} />
                            </View>
                        </View>

                        <InputComponent placeholder={'Remarks'} onChange={(value) => { setAdditionalInfo(value) }} />
                        {(error.length > 0) ?
                            <View>
                                <Text style={[{ color: 'red', textAlign: 'center' }, h3, paddingBottom1]}>{error}</Text>
                            </View>
                            : null
                        }

                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>


                            {(!loader) ?
                                <Pressable onPress={() => { submitPriceEnquiry() }} style={[{}, secondryButton, paddingHorizontal15]}>
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
        </Layout>
    );
}

export default RequestSample;