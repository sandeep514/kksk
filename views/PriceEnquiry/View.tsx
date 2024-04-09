import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';

import Layout from '../layout/Layout';
import { Regular, SemiBold, smallHeader, h1, width30, width50, h2, h3, paddingVertical2, primaryColor, secondryColor } from '../../res/assets/css/style';

function PriceEnquiryView({ route }): React.JSX.Element {



    const [details, setDetails] = useState();
    const [riceDetails, setRiceDetails] = useState();
    const [totalBags, setTotalBags] = useState(0);
    const [totalWeight, setTotalWeight] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setDetails(route.params.details)
        let purchase_order_details = route.params.details['purchase_order_details'];

        setRiceDetails(purchase_order_details)
        let totalB = 0;
        let totalW = 0;
        let totalA = 0;
        for (let i = 0; i < purchase_order_details.length; i++) {
            totalB += parseFloat(purchase_order_details[i]['bags']);
            totalW += parseFloat(purchase_order_details[i]['weight']);
            totalA += parseFloat(purchase_order_details[i]['amount']);
        }
        setTotalBags(totalB)
        setTotalWeight(totalW)
        setTotalAmount(totalA)
    }, [])

    const Item = (item) => {
        console.log('item')
        console.log(item.item)
        return (
            <View style={[{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }]}>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h3, width30, SemiBold, { color: secondryColor }]}>{item?.item?.rice_name_details?.name}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h3, width30, SemiBold, { color: secondryColor }]}>{item?.item?.rice_form_details?.form_name}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h3, width30, SemiBold, { color: secondryColor }]}>{item?.item?.lotNo}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h3, width30, SemiBold, { color: secondryColor }]}>{item?.item?.packing_type_details?.name}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h3, width50, SemiBold, { color: secondryColor }]}>{item?.item?.packing_details?.code}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h3, width30, SemiBold, { color: secondryColor }]}>{item?.item?.bags}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h3, width30, SemiBold, { color: secondryColor }]}>{item?.item?.weight}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h3, width30, SemiBold, { color: secondryColor }]}>{item?.item?.rate}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h3, width30, SemiBold, { color: secondryColor }]}>{item?.item?.amount}</Text>
            </View>
        )
    }
    return (
        <Layout >
            <View>
                <View>
                    <View style={{}}>
                        <ScrollView>
                            <View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, smallHeader, width30, { color: secondryColor }]}>Order No:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h3, { color: secondryColor }]}>{details?.Order}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, smallHeader, width30, { color: secondryColor }]}>Party Name:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h3, { color: secondryColor }]}>{details?.party_details?.name}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, smallHeader, width30, { color: secondryColor }]}>Address:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h3, { color: secondryColor }]}>{details?.Address}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, smallHeader, width30, { color: secondryColor }]}>Mobile:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h3, { color: secondryColor }]}>{details?.Mobile}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, smallHeader, width30, { color: secondryColor }]}>GSTIN:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h3, { color: secondryColor }]}>{details?.GSTIN}</Text>
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

                                        <FlatList
                                            data={details?.purchase_order_details}
                                            renderItem={({ item }) => <Item item={item} />}
                                            keyExtractor={item => item.id}
                                        />

                                        <View style={[{ flexDirection: 'row' }]}>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>Total</Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}></Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}></Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}></Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width50, SemiBold]}></Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>{totalBags} Bags </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}>{totalWeight} kg </Text>
                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h2, width30, SemiBold]}> </Text>
                                            <Text style={[{ textAlign: 'center' }, h2, width30, SemiBold]}>₹{totalAmount}/- </Text>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>

                            <View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, smallHeader, width30, { color: secondryColor }]}>Terms & Condition:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h3, { color: secondryColor }]}>{(details?.additionalInfo) ?? 'not-available'}</Text>
                                </View>

                            </View>


                        </ScrollView>
                    </View>
                </View>
            </View>
        </Layout>
    );
}

export default PriceEnquiryView;