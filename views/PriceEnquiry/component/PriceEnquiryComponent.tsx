import React, { useCallback, useEffect, useState } from 'react';
import { View, Pressable } from 'react-native';

import DropdownComponent from '../../components/DropdownComponent';
import InputComponent from '../../components/InputComponent/Index';
import { padding2, paddingHorizontal1, paddingHorizontal2, paddingVertical1, paddingVertical2, primaryButton, secondryButton, secondryBackgroundColor } from '../../../res/assets/css/style';
import { Text } from '@rneui/base';
import { get } from '../../components/apiComponent';

function PriceEnquiryComponent({ defaultValue,setFormData }): React.JSX.Element {



    const [riceName, setRiceName] = useState([]);
    const [riceForm, setriceForm] = useState([]);
    const [RicePacking, setRicePacking] = useState([]);
    const [RicePackingType, setRicePackingType] = useState([]);
    const [data, setData] = useState(defaultValue);    

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
        <View style={{ marginBottom: 0, }}>
            <View style={[{  }]}>
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

                <DropdownComponent defaultValue={data?.riceForm?.form_name} items={(data?.riceType) ? riceForm[data?.riceType?.name] : {}} placeholder={'Sub Quality Name'} listname={'form_name'} selectedItem={(event, index) => {
                    setData((previousState) => (
                        { ...previousState, riceForm: event }
                    ))
                }} />


                <DropdownComponent defaultValue={data?.packing?.code} items={RicePacking} placeholder={'Misc'} listname={'code'} selectedItem={(event, index) => {
                    setData((previousState) => (
                        { ...previousState, packing: event }
                    ))
                }} />

                <InputComponent keyboardType={'numeric'} value={data?.bags} placeholder={'Estimate Quantity'} onChange={(event) => {
                    setData((previousState) => (
                        { ...previousState, quantity: event }
                    ))
                }} />
            </View>
        </View>
    );
}

export default PriceEnquiryComponent;