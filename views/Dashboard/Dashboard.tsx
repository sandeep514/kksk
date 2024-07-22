import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import Layout from '../layout/Layout';
import {
    SemiBold,
    h3,
    marginBottom1,
    marginBottom2,
    paddingVertical2,
    secondryColor,
} from '../../res/assets/css/style';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import ListSubQuality from '../masters/subQualityMaster/List';

function Dashboard({ navigation }): React.JSX.Element {
    const [userDetails, setUserDetails] = useState();
    useFocusEffect(useCallback(() => {
        AsyncStorage.getItem('userDetails').then((userData) => {
            setUserDetails(JSON.parse(userData))
            console.log(JSON.parse(userData).role)
        }).catch((err) => {

        })
    }, []))
    useEffect(() => {


    }, [])

    const adminRoutes = [
        { 'title': 'User / Party Master', 'route': 'ListUser' },
        { 'title': 'Quality Master', 'route': 'ListQuality' },
        { 'title': 'Process Master', 'route': 'ListProcess' },
        { 'title': 'Misc Master', 'route': 'ListMisc' },
        { 'title': 'Sub Quality Master', 'route': 'ListSubQuality' },
        { 'title': 'Sample From KKSK', 'route': 'ListSampleFromAdmin' },
        { 'title': 'Price Enquiry', 'route': 'ListPriceEnquiry' },
        { 'title': 'Request Sample', 'route': 'ListRequestSample' }
    ];

    const brokerRoutes = [{ 'title': 'Price Enquiry', 'route': 'ListPriceEnquiry' }, { 'title': 'Sample From Admin', 'route': 'ListSampleFromAdmin' }, { 'title': 'Request Sample', 'route': 'ListRequestSample' }];




    return (
        <Layout >
            <View>
                <ScrollView>
                    <View>
                        <View style={[{}, marginBottom1]}>
                            {/* <Text style={[{}, header, SemiBold, { color: '#000' }]}>Hello Sandeep Singh</Text> */}
                            {/* <Text style={[{}, smallHeader, SemiBold, { color: secondryColor }]}>Hello</Text>  */}
                        </View>
                        {(userDetails?.role == 2) ?
                            Object.values(adminRoutes).map(function (value, index) {
                                return (<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Pressable onPress={() => { navigation.navigate(value.route) }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4, width: '100%' }, marginBottom2, paddingVertical2]}>
                                        <Text style={[{ color: '#fff' }, h3, SemiBold]}>{value.title}</Text>
                                    </Pressable>
                                </View>)
                            })
                            :
                            null
                        }
                        {(userDetails?.role == 7) ?
                            Object.values(brokerRoutes).map(function (value, index) {
                                return (<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Pressable onPress={() => { navigation.navigate(value.route) }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4, width: '100%' }, marginBottom2, paddingVertical2]}>
                                        <Text style={[{ color: '#fff' }, h3, SemiBold]}>{value.title}</Text>
                                    </Pressable>
                                </View>)
                            })
                            :
                            null
                        }
                        {/* <View>
                            <View style={{}}>
                                <View style={[{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }]}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListPriceEnquiries') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4 ,width: '100%'}, marginBottom2,paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>List Price Enquiries</Text>
                                        </Pressable>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListQuality') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4 ,width: '100%'}, marginBottom2,paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>List Quality</Text>
                                        </Pressable>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListProcess') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4 ,width: '100%'}, marginBottom2,paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>Process Master</Text>
                                        </Pressable>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListUser') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4 ,width: '100%'}, marginBottom2,paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>User</Text>
                                        </Pressable>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListMisc') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4, width: '100%' }, marginBottom2, paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>Misc</Text>
                                        </Pressable>
                                    </View>
                                    
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListPriceEnquiry') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4, width: '100%' }, marginBottom2, paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>list Price Enquiry</Text>
                                        </Pressable>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListRequestSample') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4, width: '100%' }, marginBottom2, paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>Request for sample</Text>
                                        </Pressable>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListSampleFromAdmin') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4, width: '100%' }, marginBottom2, paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>Sample from admin</Text>
                                        </Pressable>
                                    </View>
                              

                                </View>

                            </View>
                        </View> */}
                    </View>
                </ScrollView>
            </View>
        </Layout>
    );
}

export default Dashboard;