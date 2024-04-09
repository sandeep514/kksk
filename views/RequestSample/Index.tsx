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

function RequestSample({navigation}): React.JSX.Element {



    const [formComponentCount, setFormComponentCount] = useState([{}]);
    const [PartyList, setPartiesList] = useState([]);

    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');

    const [Order, setOrder] = useState("");
    const [Party, setParty] = useState('');
    const [Address, setAddress] = useState("");
    const [Mobile, setMobile] = useState("");
    const [GSTIN, setGSTIN] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");

    useEffect(() => {
        getPartyName()
    }, [])

    const getPartyName = () => {
        get('get/party/name').then((res) => {
            setPartiesList(res.data.parties);
        }).catch((err) => {

        })
    }

    const updateFormData = (myKey, data) => {
        formComponentCount[myKey] = data;
        setFormComponentCount(formComponentCount);
    }

    const submitPurchaseOrder = () => {
        checkIfValidation().then((res) => {
            setLoader(true)
            let postedData = {
                'Party': Party, 'Address': Address, 'Mobile': Mobile, 'GSTIN': GSTIN, 'additionalInfo': additionalInfo, formData: formComponentCount
            };

            // POST Method
            post('save/purchase/order', (postedData)).then((res) => {
                ShowToast('PO generated successfully')
                navigation.navigate('ListPurchase');
            }).catch((err) => {
                setError('Something went wrong')
            }).finally(() => {
                setLoader(false)
            })
        }).catch((err) => {
            setError("Required field are missing.")
            setLoader(false)
        })
    }
    
    const checkIfValidation = () => {
        return new Promise((resolve, reject) => {
            let parentObject = Object.keys(formComponentCount).length

            for (let i = 0; i < formComponentCount.length; i++) {
                let lengthOfObject = Object.values(formComponentCount[i]).length
                if (lengthOfObject < 9) {
                    // require fields are missing
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
                        <View key={Math.floor(Math.random() * 100)}>
                            <RequestSampleComponent defaultValue={formComponentCount} setFormData={(data) => { updateFormData(data) }} />
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
        </Layout>
    );
}

export default RequestSample;