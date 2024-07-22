import React, { useEffect, useState } from 'react';
import { View, ScrollView, Pressable } from 'react-native';

import Layout from '../layout/Layout';
import DropdownComponent from '../components/DropdownComponent';
import InputComponent from '../components/InputComponent/Index';
import { Bold, h3, padding1, paddingBottom1, paddingHorizontal15, primaryColor, secondryBackgroundColor, secondryButton } from '../../res/assets/css/style';
import { Text } from '@rneui/base';
import { ShowToast, get, post } from '../components/apiComponent';
import { ActivityIndicator } from 'react-native';
import WandAdderComponent from './component/WandAdderComponent';
import ListGrade from '../masters/grade/List';

function SampleFromAdmin({ navigation }): React.JSX.Element {
    const generateRandomNumber = () => {
        return (Math.floor(Math.random() * 224245))
    }
    const [formComponentCount, setFormComponentCount] = useState([{ 'minid': generateRandomNumber() }]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');

    const [additionalInfo, setAdditionalInfo] = useState("");
    const [riceName, setRiceName] = useState([]);
    const [riceForm, setriceForm] = useState([]);
    const [riceMisc, setRiceMisc] = useState([]);
    const [data, setData] = useState();
    const [PartyList, setPartiesList] = useState([]);
    const [riceWand, setRiceWand] = useState([]);
    const [Party, setParty] = useState('');
    const [BuyerParty, setBuyerParty] = useState('');

    useEffect(() => {
        getRiceName();
        getMiscData();
        getPartyName();
        getRiceWand();
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

    const getPartyName = () => {
        get('get/party/name').then((res) => {
            setPartiesList(res.data.parties);
        }).catch((err) => {

        })
    }

    const getRiceWand = () => {
        get('get/all/wand').then((res) => {
            setRiceWand(res.data.data);
        }).catch((err) => {

        })
    }

    const submitSampleFromAdmin = () => {
        setError('')
        if (Party != '' && BuyerParty != '') {
            if (data && Object.keys(data).length == 5) {
                setLoader(true)
                // POST Method

                data['additionalInfo'] = additionalInfo;
                data['party'] = Party;
                data['buyerParty'] = BuyerParty;
                data['grade'] = formComponentCount;

                post('add/sample/from/admin', (data)).then((res) => {
                    ShowToast('sample requested successfully')
                    navigation.navigate('ListSampleFromAdmin');
                }).catch((err) => {
                    setError('Something went wrong')
                }).finally(() => {
                    setLoader(false)
                })
            } else {
                setError('required fields are missing')
            }
        } else {
            setError('Please select party.')
        }
    }
    const deleteRow = (deletedMinid) => {
        let minidToRemove = deletedMinid;

        let processedArray = formComponentCount.filter(function (item, index) {
            return item.minid !== minidToRemove
        })

        setFormComponentCount(processedArray);
    }

    const updateFormData = (myKey, data) => {
        formComponentCount[myKey] = data;
        setFormComponentCount(formComponentCount);
    }

    const addNewRow = () => {
        setFormComponentCount([...formComponentCount, { 'minid': generateRandomNumber() }]);

    }

    return (
        <Layout >
            <View>
                <View>
                    <ScrollView>
                        <View style={{ marginBottom: 0, }}>
                            <View style={[{}]}>

                                <DropdownComponent defaultValue={Party?.name} items={PartyList} placeholder={'Seller Party'} listname={'name'} selectedItem={(event, index) => {
                                    setParty(event)
                                }} />

                                <DropdownComponent defaultValue={BuyerParty?.name} items={PartyList} placeholder={'Buyer Party'} listname={'name'} selectedItem={(event, index) => {
                                    setBuyerParty(event)
                                }} />

                                <DropdownComponent defaultValue={data?.riceType?.name} items={[{ 'id': 0, 'name': 'Select any' }, { 'id': 1, 'name': 'basmati' }, { 'id': 2, 'name': 'non-basmati' }]} placeholder={'Rice Type'} listname={'name'} selectedItem={(event, index) => {
                                    setData((previousState) => (
                                        { ...previousState, riceType: event, quantity: 0 }
                                    ))
                                }} />

                                <DropdownComponent defaultValue={data?.riceName?.name} items={riceName[data?.riceType?.name]} placeholder={'Quality Name'} listname={'name'} selectedItem={(event, index) => {
                                    setData((previousState) => (
                                        { ...previousState, riceName: event }
                                    ))
                                }} />

                                <DropdownComponent defaultValue={data?.riceForm?.form_name} items={(data?.riceType) ? riceForm[data?.riceType?.name] : {}} placeholder={'Process'} listname={'form_name'} selectedItem={(event, index) => {
                                    setData((previousState) => (
                                        { ...previousState, riceForm: event }
                                    ))
                                }} />


                                <DropdownComponent defaultValue={data?.misc?.misc} items={riceMisc} placeholder={'Misc'} listname={'misc'} selectedItem={(event, index) => {
                                    setData((previousState) => (
                                        { ...previousState, misc: event }
                                    ))
                                }} />

                                {/* <InputComponent keyboardType={'numeric'} value={data?.quantity} placeholder={'Estimate Quantity'} onChange={(event) => {
                                    setData((previousState) => (
                                        { ...previousState, quantity: event }
                                    ))
                                }} /> */}
                            </View>
                            {Object.keys(formComponentCount).map((value, index) => {
                                return (
                                    <View key={formComponentCount[index].minid}>
                                        <WandAdderComponent minid={formComponentCount[index].minid} defaultValue={formComponentCount[index]} value={value} index={index} deleteIndex={(deletedMinid) => { deleteRow(deletedMinid) }} setFormData={(data) => { updateFormData(index, data) }} grade={riceWand} />
                                    </View>
                                )
                            })}
                            <View style={[{ alignSelf: 'flex-end' }]}>
                                <Pressable style={[{}, secondryBackgroundColor, padding1]} onPress={() => { addNewRow() }}>
                                    <Text style={[{ color: '#fff' }]}>Add New Row</Text>
                                </Pressable>
                            </View>
                        </View>

                        <InputComponent placeholder={'Remarks'} onChange={(value) => { setAdditionalInfo(value) }} />
                        {(error.length > 0) ?
                            <View>
                                <Text style={[h3, paddingBottom1, Bold, { color: 'red', textAlign: 'center' }]}>{error}</Text>
                            </View>
                            : null
                        }

                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            {(!loader) ?
                                <Pressable onPress={() => { submitSampleFromAdmin() }} style={[{}, secondryButton, paddingHorizontal15]}>
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

export default SampleFromAdmin;