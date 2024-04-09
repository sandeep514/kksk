import React, { useCallback, useEffect, useState } from 'react';
import { View, Pressable } from 'react-native';

import DropdownComponent from '../../components/DropdownComponent';
import InputComponent from '../../components/InputComponent/Index';
import { padding2, paddingHorizontal1, paddingHorizontal2, paddingVertical1, paddingVertical2, primaryButton, secondryButton, secondryBackgroundColor, h4, h3, SemiBold } from '../../../res/assets/css/style';
import { Text } from '@rneui/base';
import { get } from '../../components/apiComponent';

function LoadingOrderComponent({ defaultValue, value, index, deleteIndex, setFormData }): React.JSX.Element {

    // const [riceName, setRiceName] = useState([]);
    // const [riceForm, setriceForm] = useState([]);
    // const [RicePacking, setRicePacking] = useState([]);
    // const [RicePackingType, setRicePackingType] = useState([]);
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
    }, [])

    useEffect(() => {
        setFormData(data)
    }, [data])

    const [selectedRiceType, setSelectedRiceType] = useState();
    const [listOrders, SetListOrders] = useState({});
    const [listParties, SetListParties] = useState({});
    const [selectedOrder, setSelectedOrder] = useState('');


    useEffect(() => {
        // getListOrders();
        getListParties();
        // getRiceName()
        // getPackingData()
    }, [])

    const getListOrderByParty = (partyId) => {
        get('get/purchase/order/list/by/party/' + partyId).then((res) => {
            console.log("res res");
            console.log(res);
            SetListOrders(res.data.data)
            // setRiceDetails(res.data.data[0].purchase_order_details)
        }).catch((err) => {

        }).finally(() => {

        })
    }
    const getListParties = () => {
        get('get/purchase/parties').then((res) => {
            SetListParties(res.data.data)
        }).catch((err) => {

        }).finally(() => {

        })
    }

    // const getRiceName = () => {
    //     //get/rice/name
    //     get('get/rice/name').then((res) => {
    //         setRiceName(res.data.riceName)
    //         setriceForm(res.data.riceForm)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }
    // const getPackingData = () => {
    //     //get/packing/data

    //     get('get/packing/data').then((res) => {
    //         setRicePacking(res.data.packing)
    //         setRicePackingType(res.data.packingType)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    return (
        <View style={{ marginBottom: 20, }}>
            <View style={{ alignContent: 'left', alignItems: 'left', flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={[{ backgroundColor: '#f0f0f0' }, paddingHorizontal2, paddingVertical1]}>
                    <Text>Row {index + 1}</Text>
                </View>
                <View style={[{ backgroundColor: '#f0f0f0' }]}>
                    <Pressable onPress={() => { deleteIndex(index) }} style={[{}, secondryBackgroundColor, paddingVertical1, paddingHorizontal2]}>
                        <Text style={{ color: '#fff' }}>Delete</Text>
                    </Pressable>
                </View>
            </View>
            <View style={[{ borderWidth: 2, borderColor: '#f0f0f0' }, paddingHorizontal2, paddingVertical2]}>

                <DropdownComponent defaultValue={data?.name} items={listParties} placeholder={'Select Party'} listname={'name'} selectedItem={(event, index) => {
                    // setSelectedOrder(event)
                    console.log(event.id)
                    getListOrderByParty(event.id)
                    setData((previousState) => (
                        { ...previousState, selectedParty: event.id }
                    ))


                }} />
                <DropdownComponent defaultValue={data?.riceType?.name} items={listOrders} placeholder={'Order Number'} listname={'Order'} selectedItem={(event, index) => {
                    setSelectedOrder(event)
                    setData((previousState) => (
                        { ...previousState, orderId: event.Order }
                    ))
                }} />

                <DropdownComponent defaultValue={data?.riceName?.name} items={selectedOrder?.riceConcatData} placeholder={'Select Quality'} listname={'name'} selectedItem={(event, index) => {

                    setData((previousState) => (
                        { ...previousState, riceName: event, amount: selectedOrder?.purchase_order_details[index].amount, bags: selectedOrder?.purchase_order_details[index].bags, lotNo: selectedOrder?.purchase_order_details[index].lotNo, rate: selectedOrder?.purchase_order_details[index].rate, packing_details: selectedOrder?.purchase_order_details[index].packing_details?.code, packing_type_details: selectedOrder?.purchase_order_details[index].packing_type_details?.name, weight: selectedOrder?.purchase_order_details[index]?.weight }
                    ))
                }} />
                <InputComponent editable={false} keyboardType={'numeric'} value={data?.lotNo} placeholder={'LotNo'} />
                <InputComponent editable={false} keyboardType={'numeric'} value={data?.packing_details} placeholder={'Packing'} />
                <InputComponent editable={true} keyboardType={'numeric'} value={data?.weight} placeholder={'Weight'} onChange={(event) => {
                    setData((previousState) => (
                        { ...previousState, weight: event, amount: ((parseFloat(event) * parseFloat(data?.rate))) }
                    ))
                }} />
                <InputComponent editable={false} keyboardType={'numeric'} value={data?.packing_type_details} placeholder={'Packing type'} />

                <InputComponent editable={true} keyboardType={'numeric'} value={data?.bags} placeholder={'Bags'} onChange={(event) => {
                    setData((previousState) => (
                        { ...previousState, bags: event }
                    ))
                }} />

                <InputComponent editable={false} keyboardType={'numeric'} value={data?.rate} placeholder={'Rate'} />
                {/* <InputComponent editable={false} keyboardType={'numeric'} value={(data?.rate * data?.bags)} placeholder={'Amount'} /> */}
                <View style={[{ flexDirection: 'row' }, paddingVertical2]}>
                    <Text style={[{}, h3, SemiBold]}>Amount: </Text>
                    <Text>{data?.amount}</Text>
                </View>


            </View>
        </View>
    );
}

export default LoadingOrderComponent;