import React, { useCallback, useEffect, useState } from 'react';
import { View, Pressable } from 'react-native';

import DropdownComponent from '../../components/DropdownComponent';
import InputComponent from '../../components/InputComponent/Index';
import { padding2, paddingHorizontal1, paddingHorizontal2, paddingVertical1, paddingVertical2, primaryButton, secondryButton, secondryBackgroundColor } from '../../../res/assets/css/style';
import { Text } from '@rneui/base';
import { get } from '../../components/apiComponent';

function PurchaseFormComponent({ defaultValue, value, index, deleteIndex, setFormData }): React.JSX.Element {



    const [riceName, setRiceName] = useState([]);
    const [riceForm, setriceForm] = useState([]);
    const [RicePacking, setRicePacking] = useState([]);
    const [RicePackingType, setRicePackingType] = useState([]);
    const [data, setData] = useState(defaultValue);

    console.log(data)
    useEffect(() => {
        console.log('defaultValue')
        console.log(index, defaultValue)
    }, [])

    useEffect(() => {
        setFormData(data)
    }, [data])

    const [selectedRiceType, setSelectedRiceType] = useState();


    useEffect(() => {
        getRiceName()
        getPackingData()
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
    const getPackingData = () => {
        //get/packing/data

        get('get/packing/data').then((res) => {
            setRicePacking(res.data.packing)
            setRicePackingType(res.data.packingType)
        }).catch((err) => {
            console.log(err)
        })
    }

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

                <DropdownComponent defaultValue={data?.riceForm?.form_name} items={(data?.riceType) ? riceForm[data?.riceType?.name] : {}} placeholder={'Quality Name'} listname={'form_name'} selectedItem={(event, index) => {
                    setData((previousState) => (
                        { ...previousState, riceForm: event }
                    ))
                }} />

                <InputComponent keyboardType={'numeric'} value={data?.lotNo} placeholder={'Lot No'} onChange={(event) => {
                    setData((previousState) => (
                        { ...previousState, lotNo: event }
                    ))
                }} />

                <DropdownComponent defaultValue={data?.packing?.code} items={RicePacking} placeholder={'Rice Packing'} listname={'code'} selectedItem={(event, index) => {
                    setData((previousState) => (
                        { ...previousState, packing: event }
                    ))
                }} />



                <DropdownComponent defaultValue={data?.packingType?.name} items={RicePackingType} placeholder={'Rice Packing Type'} listname={'name'} selectedItem={(event, index) => {
                    setData((previousState) => (
                        { ...previousState, packingType: event }
                    ))
                }} />

                <InputComponent keyboardType={'numeric'} value={data?.bags} placeholder={'Bags/pcs'} onChange={(event) => {
                    setData((previousState) => (
                        { ...previousState, bags: event }
                    ))
                }} />

                <InputComponent keyboardType={'numeric'} value={data?.weight} placeholder={'Weight'} onChange={(event) => {
                    setData((previousState) => (
                        { ...previousState, amount: (parseInt(event) * ((previousState.rate) ?? 1)), weight: event }
                    ))
                    // setData((previousState) => (
                    //     { ...previousState }
                    // ))
                }} />

                <InputComponent keyboardType={'numeric'} value={data?.rate} placeholder={'Rate'} onChange={(event) => {
                    setData((previousState) => (
                        { ...previousState, rate: event, amount: (parseInt(event) * ((previousState.weight) ?? 1)) }
                    ))
                    // setData((previousState) => (
                    //     { ...previousState, rate: parseInt(event) }
                    // ))


                    console.log((parseInt(event) * (data.weight)))
                }} />

                <InputComponent editable={false} keyboardType={'numeric'} value={'' + (!isNaN(data?.amount) ? data?.amount : 'Amount')} placeholder={'' + (!isNaN(data?.amount) ? data?.amount : '')} onChange={(event) => {
                    console.log(data?.amount)
                    setData((previousState) => (
                        { ...previousState, amount: event }
                    ))
                }} />
                {/* <Text>Amount{data?.amount}</Text> */}
            </View>
        </View>
    );
}

export default PurchaseFormComponent;