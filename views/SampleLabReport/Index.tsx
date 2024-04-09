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

function SampleLabReports({navigation}): React.JSX.Element {



    const [formComponentCount, setFormComponentCount] = useState([{}]);


    const [listOrder, SetListOrders] = useState({});
    const [riceParams, setRiceParams] = useState({});
    const [riceDetails, setRiceDetails] = useState({});
    const [selectedOrder, SetSelectedOrder] = useState({});

    const [PartyName, setPartyName] = useState('');
    const [Quality, setQuality] = useState('');
    const [qualityId, setQualityId] = useState('');
    const [concatedData, setConcatedData] = useState({});
    const [SubQuality, setSubQuality] = useState('');
    const [PackingType, setPackingType] = useState('');
    const [PackingSize, setPackingSize] = useState('');
    const [NoOfBags, setNoOfBags] = useState('');
    const [remarks, setRemarks] = useState('');
    const [paramsData, SetParamsData] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('pending');
    const [error, setError] = useState('');
    const [showSaveLoader, setShowSaveLoader] = useState(false);
    let formData = {};

    useEffect(() => {
        getListOrders();
        getParameters();
    }, [])

    const getListOrders = () => {
        get('get/purchase/order/list').then((res) => {
            // console.log("ujk");
            // console.log(res.data.data);
            SetListOrders(res.data.data)
            setRiceDetails(res.data.data[0].purchase_order_details)
        }).catch((err) => {

        }).finally(() => {

        })
    }
    const getParameters = () => {
        get('list/rice/parameters').then((res) => {
            setRiceParams(res.data.data)
        }).catch((err) => {

        }).finally(() => {

        })
    }

    const submitSampleLabReports = () => {
        if (Object.keys(selectedOrder).length > 0) {
            setShowSaveLoader(true)
            let postedData = {
                'Order': selectedOrder.id, 'paramData': formData, 'status': selectedStatus, 'remarks': remarks, 'qualityId': qualityId, 'created_by': 1
            };

            // POST Method
            post('save/sampe/lab/report', (postedData)).then((res) => {
                ShowToast(res.data.message)
                navigation.navigate('ListSampleLabReport');
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                setShowSaveLoader(true);
            })
        } else {
            ShowToast("Required fields are missing.")
            setError('Required fields are missing.')
        }
    }


    return (
        <Layout >
            <View>
                <View>
                    <ScrollView>
                        {/* <InputComponent placeholder={'Order No'} onChange={(value) => { setOrder(value), console.log(value) }} /> */}

                        <DropdownComponent defaultValue={'Order'} items={listOrder} placeholder={'Order'} listname={'Order'} selectedItem={(event, index) => {
                            SetSelectedOrder(event)
                            setPartyName(event?.party_details?.name);
                            setConcatedData(event.riceConcatData);

                        }} />

                        <DropdownComponent defaultValue={'Rice Quality'} items={concatedData} placeholder={'Quality'} listname={'name'} selectedItem={(event, index) => {
                            console.log((event.id).split('_')[0])
                            setQualityId((event.id).split('_')[0]);
                            setQuality(selectedOrder?.purchase_order_details[index]?.rice_name_details?.name)
                            setSubQuality(selectedOrder?.purchase_order_details[index]?.rice_form_details?.form_name)
                            setPackingType(selectedOrder?.purchase_order_details[index]?.packing_type_details?.name)
                            setPackingSize(selectedOrder?.purchase_order_details[index]?.packing_details?.code)
                            setNoOfBags(selectedOrder?.purchase_order_details[index]?.bags);

                            // SetSelectedOrder(event)
                            // setQuality(event?.purchase_order_details[0]?.rice_name_details?.name);
                            // setSubQuality(event?.purchase_order_details[0]?.rice_form_details?.form_name);
                            // setPackingType(event?.purchase_order_details[0]?.packing_type_details?.name);
                            // setPackingSize(event?.purchase_order_details[0]?.packing_details?.code);
                            // setNoOfBags(event?.purchase_order_details[0]?.bags);
                        }} />

                        {/* <DropdownComponent placeholder={'Party Name'} onChange={() => { setParty(value) }} /> */}
                        <InputComponent editable={false} value={PartyName} placeholder={'Party Name'} />
                        <InputComponent editable={false} value={Quality} placeholder={'Quality'} />
                        <InputComponent editable={false} value={SubQuality} placeholder={'Sub Quality'} />
                        <InputComponent editable={false} value={PackingType} placeholder={'Packing Type'} />
                        <InputComponent editable={false} value={PackingSize} placeholder={'Packing Size'} />
                        <InputComponent editable={false} value={NoOfBags} placeholder={'No of bags'} />

                        {Object.keys(riceParams).map((value, index) => {
                            console.log(value)
                            return (
                                <View key={Math.floor(Math.random() * 100)} style={[{ borderWidth: 2, borderColor: primaryColor }, marginBottom2]}>
                                    <Text style={[{ textTransform: 'uppercase', }, primaryBackgroundColor, h3, padding1, SemiBold,]}>{value}</Text>
                                    <View style={[{}, padding1]}>
                                        {riceParams[value].map((val, i) => {
                                            return (
                                                <View>
                                                    {/* <Text style={[{ textTransform: 'uppercase', }, h3, padding1, SemiBold]}>{val?.id}</Text> */}
                                                    <InputComponent editable={true} placeholder={val?.parameters} onChange={(value) => {
                                                        let valId = val?.id;
                                                        formData[valId] = value;
                                                    }} />
                                                </View>
                                            )
                                        })}
                                    </View>
                                </View>
                            )
                        })}

                        <DropdownComponent defaultValue={selectedStatus} items={[{ 'id': 1, 'name': 'Pending' }, { 'id': 2, 'name': 'Accepted' }, { 'id': 3, 'name': 'Rejected' }]} placeholder={'Status'} listname={'name'} selectedItem={(event, index) => {
                            setSelectedStatus(event.name)
                        }} />

                        <InputComponent editable={true} value={remarks} placeholder={'Remarks'} onChange={(value) => { setRemarks(value), console.log(value) }} />

                        {/*<View style={[{ alignSelf: 'flex-end' }]}>
                            <Pressable style={[{}, secondryBackgroundColor, padding1]} onPress={() => { addNewRow() }}>
                                <Text style={[{ color: '#fff' }]}>Add New Row</Text>
                            </Pressable>
                        </View> */}
                        {/* <InputComponent placeholder={'Terms & condition'} onChange={(value) => { setAdditionalInfo(value) }} /> */}
                        <View >
                            <Text style={[{}, h3, paddingVertical1, { color: 'red', textAlign: 'center' }]}>{error}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            {(!showSaveLoader) ?
                                <Pressable onPress={() => { submitSampleLabReports() }} style={[{}, secondryButton, paddingHorizontal15]}>
                                    <Text style={[{ color: primaryColor }, h3, Bold]}>Submit</Text>
                                </Pressable>
                                :
                                <View style={[{}, secondryButton, paddingHorizontal15]}>
                                    <ActivityIndicator color={primaryColor} />
                                </View>
                            }



                        </View>

                    </ScrollView>
                </View>
            </View>
        </Layout>
    );
}

export default memo(SampleLabReports);