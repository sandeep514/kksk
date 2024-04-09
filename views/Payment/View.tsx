import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import Layout from '../layout/Layout';
import { Regular, SemiBold, smallHeader, h1, width30, width50, h2, h3, paddingVertical2 } from '../../res/assets/css/style';

function PaymentView(): React.JSX.Element {



    return (
        <Layout >
            <View>
                <View>
                    <View style={{}}>
                        <ScrollView>
                            <View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, smallHeader, width30]}>Order No:</Text>
                                    <Text style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>Order No</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, smallHeader, width30]}>Party Name:</Text>
                                    <Text style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>Order No</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, smallHeader, width30]}>Address:</Text>
                                    <Text style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>Order No</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, smallHeader, width30]}>Mobile:</Text>
                                    <Text style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>order no</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, smallHeader, width30]}>GSTIN:</Text>
                                    <Text style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>order no</Text>
                                </View>
                            </View>

                            <View style={[{}, paddingVertical2]}>
                                <ScrollView horizontal={true}>
                                    <View style={[{ borderColor: 'gray', borderWidth: 1 }]}>
                                        <View style={[{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }]}>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Quality</Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Sub Quality </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Lot No </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Packing Type </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width50, SemiBold]}>Packing Size(Kg) </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Bags/pcs </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Weight </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Rate </Text>
                                            <Text style={[{ textAlign: 'center' }, h2, width30, SemiBold]}>Amount </Text>
                                        </View>

                                        <View style={[{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }]}>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>1121</Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>Cream Basmati </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>1222 </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>PP </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width50, Regular]}>50Kg </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>22 </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>1200 </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>60 </Text>
                                            <Text style={[{ textAlign: 'center' }, h2, width30, Regular]}>72000 </Text>
                                        </View>
                                        <View style={[{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }]}>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>1121</Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>Cream Basmati </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>1222 </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>PP </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width50, Regular]}>50Kg </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>22 </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>1200 </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>60 </Text>
                                            <Text style={[{ textAlign: 'center' }, h2, width30, Regular]}>72000 </Text>
                                        </View>
                                        <View style={[{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }]}>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>1121</Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>Cream Basmati </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>1222 </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>PP </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width50, Regular]}>50Kg </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>22 </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>1200 </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, Regular]}>60 </Text>
                                            <Text style={[{ textAlign: 'center' }, h2, width30, Regular]}>72000 </Text>
                                        </View>

                                        <View style={[{ flexDirection: 'row' }]}>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Quality</Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Sub Quality </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Lot No </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Packing Type </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width50, SemiBold]}>Packing Size(Kg) </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Bags/pcs </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Weight </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Rate </Text>
                                            <Text style={[{ textAlign: 'center' }, h2, width30, SemiBold]}>Amount </Text>
                                        </View>

                                    </View>
                                </ScrollView>
                            </View>

                            <View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, smallHeader, width30]}>Remarks:</Text>
                                    <Text style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>Hello, This is a test message.</Text>
                                </View>

                            </View>


                        </ScrollView>
                    </View>
                </View>
            </View>
        </Layout>
    );
}

export default PaymentView;