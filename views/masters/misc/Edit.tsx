import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, Pressable, ActivityIndicator } from 'react-native';


import { Bold, h3, padding1, paddingBottom1, paddingHorizontal15, primaryColor, secondryBackgroundColor, secondryButton } from '../../../res/assets/css/style';
import { Text } from '@rneui/base';
import { ShowToast, post } from '../../components/apiComponent';
import Layout from '../../layout/Layout';
import DropdownComponent from '../../components/DropdownComponent';
import InputComponent from '../../components/InputComponent/Index';
import { useFocusEffect } from '@react-navigation/native';


function EditMisc({ navigation, route }): React.JSX.Element {

    const [misc, setMisc] = useState('');
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(false);

    useFocusEffect(useCallback(() => {
        setMisc(route?.params?.details?.misc)
    }, []))
    const submitPurchaseOrder = () => {
        setError('');
        if (misc.length > 0) {
            setLoader(true)
            let postedData = {
                'id': route.params.details?.id,
                'misc': misc
            };

            // POST Method
            post('update/misc', (postedData)).then((res) => {
                console.log('res')
                console.log(res)
                if (res.data.status == 'error') {
                    setError(res.data.message)
                } else {
                    ShowToast("Misc added successfully");
                    navigation.navigate('ListMisc');
                }

            }).catch((err) => {
                setError(err.data.message);
                console.log('err')
                console.log(err)
            }).finally(() => {
                setLoader(false)
            })
        } else {
            console.log('Require fields are missing.');
        }
    }

    return (
        <Layout >
            <View>
                <View>
                    <View style={{}}>
                        <ScrollView>
                            {/* <DropdownComponent items={[{ 'id': 1, 'name': 'basmati' }, { 'id': 2, 'name': 'non-basmati' }]} placeholder={riceType} listname={'name'} selectedItem={(event, index) => {
                                setRiceType(event.name)
                            }} /> */}

                            <InputComponent placeholder={'Misc'} value={misc} onChange={(value) => { setMisc(value) }} />

                            {(error.length > 0) ?
                                <View>
                                    <Text style={[h3, paddingBottom1, { color: 'red', textAlign: 'center' }]}>{error}</Text>
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
            </View>
        </Layout>
    );
}

export default EditMisc;