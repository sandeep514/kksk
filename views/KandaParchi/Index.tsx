import React, { memo, useEffect, useState } from 'react';
import { View, ScrollView, Pressable, ActivityIndicator } from 'react-native';

import Layout from '../layout/Layout';
import DropdownComponent from '../components/DropdownComponent';
import InputComponent from '../components/InputComponent/Index';
import {
    Bold,
    h3,
    paddingHorizontal15,
    paddingVertical1,
    primaryColor,
    secondryButton,
} from '../../res/assets/css/style';
import { Text } from '@rneui/base';
import { ShowToast, get, post } from '../components/apiComponent';

function KandaParchi({ navigation }): React.JSX.Element {

    const [listOrder, SetListOrders] = useState({});
    const [loadingDetails, setLoadingDetails] = useState({});
    const [selectedOrder, SetSelectedOrder] = useState({});
    const [qualityId, setQualityId] = useState({});
    const [concatedData, setConcatedData] = useState({});

    const [formData, setFormData] = useState({});
    const [error, setError] = useState('');
    const [showSaveLoader, setShowSaveLoader] = useState(false);

    useEffect(() => {
        getListOrders();
    }, [])

    const getListOrders = () => {
        get('get/purchase/order/list').then((res) => {
            SetListOrders(res.data.data)
        }).catch((err) => {

        }).finally(() => {

        })
    }

    const submitSampleLabReports = () => {
        if (Object.keys(formData).length == 9 && selectedOrder) {
            setShowSaveLoader(true)
            let postedData = {
                'Order': selectedOrder, 'paramData': formData
            };
            // POST Method
            post('save/kanda/parchi', (postedData)).then((res) => {
                ShowToast(res.data.message)
                navigation.navigate('ListKandaParchi');
            }).catch((err) => {
            }).finally(() => {
                setShowSaveLoader(true);
            })
        } else {
            setError('Required fields are missing.')
        }
    } 


    return (
        <Layout >
            <View>
                <View>
                    <ScrollView>
                        <DropdownComponent defaultValue={'Order'} items={listOrder} placeholder={'Order'} listname={'Order'} selectedItem={(event, index) => {
                            setLoadingDetails(event?.loadingOrder)
                            SetSelectedOrder(event.id)
                            setFormData((PreState) => (
                                { ...PreState, 'partyName': event?.party_details?.name, 'party': event?.party_details?.id }
                            ))
                            setConcatedData(event.riceConcatData);

                        }} />


                        <DropdownComponent defaultValue={'Rice Quality'} items={concatedData} placeholder={'Quality'} listname={'name'} selectedItem={(event, index) => {
                            setFormData((PreState) => (
                                { ...PreState, 'qualityId': ((event.id).split('_')[0]) ,'subQualityId': ((event.id).split('_')[1]) }
                            ))
                          
                        }} />

                        {/* <DropdownComponent defaultValue={'Loading'} items={loadingDetails} placeholder={'Loading'} listname={'loadingNumber'} selectedItem={(event, index) => {
                            // setLoadingDetails(event?.get_loading_order_details)
                            // SetSelectedOrder(event)
                            // setPartyName(event?.party_details?.name);
                            // setConcatedData(event.riceConcatData);
                            setSelectedLoadingNumber(event)
                            console.log(selectedOrder['get_loading_order_details'][index])
                            setPackingType(selectedOrder['get_loading_order_details'][index]?.packing_type_details)
                            setPackingSize(selectedOrder['get_loading_order_details'][index]?.packing_details)
                            setNoOfBags(selectedOrder['get_loading_order_details'][index]?.bags);
                            setWeight(selectedOrder['get_loading_order_details'][index]?.weight);
                        }} /> */}

                        {/* <DropdownComponent placeholder={'Party Name'} onChange={() => { setParty(value) }} /> */}
                        <InputComponent editable={false} value={formData?.partyName} placeholder={'Party Name'} onChange={(value) => { setFormData((PreState) => (
                            {...PreState , 'party' : value}  
                        )) }}   />
                        <InputComponent editable={true} value={formData?.VehicleNo} placeholder={'Vehicle no'} onChange={(value) => { setFormData((PreState) => (
                            {...PreState , 'vehicleNo' : value}  
                        )) }}   />
                      
                        <InputComponent editable={true} value={formData?.GrossWeight} placeholder={'Gross Weight'} onChange={(value) => { setFormData((PreState) => (
                            {...PreState , 'grossWeight' : value}  
                        )) }}   />
                        <InputComponent editable={true} value={formData?.TareWeight} placeholder={'Tare Weight'} onChange={(value) => { setFormData((PreState) => (
                            {...PreState , 'tareWeight' : value}  
                        )) }}   />
                        <InputComponent editable={true} value={formData?.NetWeight} placeholder={'Net Weight'} onChange={(value) => { setFormData((PreState) => (
                            {...PreState , 'netWeight' : value}  
                        )) }}   />
                        <InputComponent editable={true} value={formData?.GatePassNo} placeholder={'Gate Pass No'} onChange={(value) => { setFormData((PreState) => (
                            {...PreState , 'gatePassNo' : value}  
                        )) }}   />


                        {/* <DropdownComponent defaultValue={selectedStatus} items={[{ 'id': 1, 'name': 'Pending' }, { 'id': 2, 'name': 'Accepted' }, { 'id': 3, 'name': 'Rejected' }]} placeholder={'Status'} listname={'name'} selectedItem={(event, index) => {
                            setSelectedStatus(event.name)
                        }} /> */}

                        {/* <InputComponent editable={true} value={remarks} placeholder={'Remarks'} onChange={(value) => { setRemarks(value), console.log(value) }} /> */}


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

export default KandaParchi;