import React,
{
    useEffect, useState
} from 'react';
import {
    View, ScrollView, Pressable
} from 'react-native';

import Layout from '../layout/Layout';
import DropdownComponent from '../components/DropdownComponent';
import InputComponent from '../components/InputComponent/Index';
import ButtonComponent from '../components/ButtonComponent/Index';
import DatePicker from 'react-native-date-picker'

import {
    Bold, Medium, SemiBold, h3, h4, marginBottom1, padding1, paddingHorizontal15, paddingVertical1, paddingVertical2, primaryColor, secondryBackgroundColor, secondryButton, secondryColor
} from '../../res/assets/css/style';
import {
    Text
} from '@rneui/base';
import LoadingOrderComponent from './component/LoadingOrderComponent';
import {
    ShowToast,
    get, post
} from '../components/apiComponent';
// import DatePicker from 'react-native-datepicker'

function LoadingOrder({ navigation }): React.JSX.Element {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [selecteddate, setSelectedDate] = useState()
    const [formComponentCount, setFormComponentCount] = useState([{}]);
    const [data, setData] = useState([{}]);
    const [error, setError] = useState('');
    // const [PartyList, setPartiesList] = useState([]);

    const [Order, setOrder] = useState("");
    const [Party, setParty] = useState('');
    const [Address, setAddress] = useState("");
    const [Mobile, setMobile] = useState("");
    const [GSTIN, setGSTIN] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");


    useEffect(() => {
        // getPartyName()
        let date = new Date();
        let convertedDate = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
        setSelectedDate(convertedDate)
        setData((preState) => (
            {
                ...preState, 'billDate': convertedDate, plusCharges: '', minusCharges: '',additionalInfo: '' }
        ))


    }, [])


    // const getPartyName = () => {
    //     get('get/party/name').then((res) => {
    //         setPartiesList(res.data.parties);
    //     }).catch((err) => { })
    // }

    const deleteRow = (deletedIndex) => {
        let elementToRemove = deletedIndex;
        let processedArray = formComponentCount.filter(function (item, index) {
            return index !== elementToRemove
        })
        setFormComponentCount(processedArray);
    }

    const updateFormData = (myKey, data) => {
        formComponentCount[myKey] = data;
        setFormComponentCount(formComponentCount);
    }

    const addNewRow = () => {
        setFormComponentCount([...formComponentCount,
        {}
        ]);
    }
    const submitLoadingOrder = () => {
        setError('')
        let dataLength = Object.keys(data).length;
        console.log('dataLength')
        console.log(data)
        if (dataLength >= 6) {
            checkIfValidation().then((res) => {
                let postedData = {
                    data: data, formData: formComponentCount
                };
                console.log('postedData');
                console.log(postedData);
                // POST Method
                post('save/loading/orders', (postedData)).then((res) => {
                    console.log(res)
                    ShowToast('Loading generated successfully.')
                    navigation.navigate('ListLoadingOrder')
                }).catch((err) => {
                    ShowToast('Something went wrong.')
                })
            }).catch((err) => {
                console.log(err)
                console.log("i am here err")
            })
        } else {
            setError('Required fields are missing.')
        }
    }
    const checkIfValidation = () => {
        return new Promise((resolve, reject) => {
            let parentObject = Object.keys(formComponentCount).length
            console.log('formComponentCount');
            console.log(formComponentCount);
            for (let i = 0; i < parentObject; i++) {
                let lengthOfObject = Object.values(formComponentCount[i]).length
                if (lengthOfObject < 9) {
                    // require fields are missing
                    ShowToast('Required fields are missing');
                    reject(false);
                } else {
                    if (i == (parentObject - 1)) {
                        resolve(true)
                    }
                }
            }
        })
    }
    return (
        <Layout >
            <View>
                <View>
                    <ScrollView>
                        {/* <InputComponent placeholder={'Loading No.'
                        } onChange={(value) => {
                            setData((preState) => (
                                { ...preState, 'loadingNumber': value }
                            ))
                        }} /> */}

                        <InputComponent placeholder={'Vehicle No.'
                        } onChange={(value) => {
                            setData((preState) => (
                                { ...preState, 'vehicleNumber': value }
                            ))
                        }} />
                        <InputComponent placeholder={'Transport Name'
                        } onChange={(value) => {
                            setData((preState) => (
                                { ...preState, 'transportNumber': value }
                            ))
                        }} />
                        <InputComponent placeholder={'Driver Name'
                        } onChange={(value) => {
                            setData((preState) => (
                                { ...preState, 'driverName': value }
                            ))
                        }} />
                        <InputComponent placeholder={'Driver Mobile'
                        } onChange={(value) => {
                            setData((preState) => (
                                { ...preState, 'driverMobile': value }
                            ))
                        }} />
                        <InputComponent placeholder={'Bill no'
                        } onChange={(value) => {
                            setData((preState) => (
                                { ...preState, 'billno': value }
                            ))
                        }} />

                        <Pressable onPress={() => setOpen(true)} >
                            <Text style={[{ color: secondryColor }, h3, SemiBold]}>Bill Date</Text>
                            <Text style={[h4, Medium, marginBottom1, paddingVertical2, { backgroundColor: '#f0f0f0', borderRadius: 10, paddingHorizontal: 15, color: 'gray' }]}>
                                {selecteddate}
                            </Text>
                        </Pressable>

                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            mode="date"
                            onConfirm={(date) => {
                                var mydate = new Date(date);
                                let convertedDate = (mydate.getFullYear() + '-' + (mydate.getMonth() + 1) + '-' + mydate.getDate());
                                console.log(convertedDate)
                                setOpen(false)
                                setSelectedDate(convertedDate)
                                setData((preState) => (
                                    { ...preState, 'billDate': value }
                                ))
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                        {(formComponentCount).map((value, index) => {
                            return (
                                <View key={Math.floor(Math.random() * 100)
                                }>
                                    <LoadingOrderComponent defaultValue={formComponentCount[index]} value={value} index={index} deleteIndex={(deletedIndex) => {
                                        deleteRow(deletedIndex)
                                    }
                                    } setFormData={(data) => {
                                        updateFormData(index, data)
                                    }
                                    } />
                                </View>
                            )
                        })
                        }
                        <View style={
                            [
                                {
                                    alignSelf: 'flex-end'
                                }
                            ]
                        }>
                            <Pressable style={
                                [
                                    {}, secondryBackgroundColor, padding1
                                ]
                            } onPress={() => {
                                addNewRow()
                            }
                            }>
                                <Text style={
                                    [
                                        {
                                            color: '#fff'
                                        }
                                    ]
                                }>Add New Row</Text>
                            </Pressable>
                        </View>
                        <InputComponent editable={true} keyboardType={'numeric'} value={data?.plusCharges} placeholder={'Other Charges +'} onChange={(event) => {
                            setData((previousState) => (
                                { ...previousState, plusCharges: event }
                            ))
                        }} />
                        <InputComponent editable={true} keyboardType={'numeric'} value={data?.minusCharges} placeholder={'Other Charges -'} onChange={(event) => {
                            setData((previousState) => (
                                { ...previousState, minusCharges: event }
                            ))
                        }} />

                        <InputComponent placeholder={'Terms & condition'} onChange={(value) => {
                            setData((preState) => (
                                { ...preState, 'additionalInfo': value }
                            ))
                        }} />


                        {(error) ?
                            <Text style={[{ textAlign: 'center' }, paddingVertical1]}>{error}</Text>
                            : null
                        }

                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            <Pressable onPress={() => { submitLoadingOrder() }} style={[{}, secondryButton, paddingHorizontal15]}>
                                <Text style={[{ color: primaryColor }, h3, Bold]}>Submit</Text>
                            </Pressable>
                        </View>

                    </ScrollView>
                </View>
            </View>
        </Layout>
    );
}

export default LoadingOrder;