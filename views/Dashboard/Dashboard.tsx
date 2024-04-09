import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import Layout from '../layout/Layout';
import { Regular, SemiBold, h1, h2, h3, h4, h5, header, height1, height80, mainHeader, marginBottom1, marginBottom2, marginLeft2, paddingHorizontal2, paddingHorizontal5, paddingVertical2, paddingVertical3, paddingVertical5, primaryColor, secondryColor, smallHeader, width100, width40, width43, width45, width95 } from '../../res/assets/css/style';
import { ScrollView } from 'react-native-gesture-handler';

function Dashboard({ navigation }): React.JSX.Element {


    useEffect(() => {
        // ShowToast("hello");
    }, [])


    return (
        <Layout >
            <View>
                <ScrollView>
                    <View>
                        <View style={[{}, marginBottom1]}>
                            <Text style={[{}, header, SemiBold, { color: secondryColor }]}>Hello Sandeep Singh</Text>
                            {/* <Text style={[{}, smallHeader, SemiBold, { color: secondryColor }]}>Hello</Text>  */}
                        </View>

                        <View>
                            <View style={{}}>
                                <View style={[{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }]}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListPriceEnquiries') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4 ,width: '100%'}, marginBottom2,paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>List Price Enquiries</Text>
                                        </Pressable>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListSubQuality') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4 ,width: '100%'}, marginBottom2,paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>Sub Quality Master</Text>
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
                                        <Pressable onPress={() => { navigation.navigate('ListGrade') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4, width: '100%' }, marginBottom2, paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>Grade</Text>
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
                                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListSampleLabReport') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4 ,width: '100%'}, marginBottom2,paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>Sample Lab Report</Text>
                                        </Pressable>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListLoadingOrder') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4 ,width: '100%'}, marginBottom2,paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>Loading Detail</Text>
                                        </Pressable>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListGatePassEntry') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4 ,width: '100%'}, marginBottom2,paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>Gate Pass Entry</Text>
                                        </Pressable>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListAnalysisReportLabIncharge') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4 ,width: '100%'}, marginBottom2,paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>Lab Analysis Report</Text>
                                        </Pressable>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable onPress={() => { navigation.navigate('ListKandaParchi') }} style={[{ backgroundColor: secondryColor, borderRadius: 20, alignItems: 'center', elevation: 4 ,width: '100%'}, marginBottom2,paddingVertical2]}>
                                            <Text style={[{ color: '#fff' }, h3, SemiBold]}>Kanda Parchi</Text>
                                        </Pressable>
                                    </View> */}

                                </View>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Layout>
    );
}

export default Dashboard;