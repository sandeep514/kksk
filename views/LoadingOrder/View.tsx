import React, { memo, useCallback, useEffect, useState } from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';

import Layout from '../layout/Layout';
import { Regular, SemiBold, smallHeader, h1, width30, width50, h2, h3, paddingVertical2, primaryColor, secondryColor, h4 } from '../../res/assets/css/style';
import { useFocusEffect } from '@react-navigation/native';

function LoadingOrderView({ route }): React.JSX.Element {



    const [details, setDetails] = useState({});
    const [loader, setLoader] = useState(false);
    const [riceDetails, setRiceDetails] = useState();
    const [totalBags, setTotalBags] = useState(0);
    const [totalWeight, setTotalWeight] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useFocusEffect(useCallback(() => {
        setLoader(true)
        setDetails(route.params.details)
        console.log("here");
        console.log(route.params.details)

        let purchase_order_details = route.params.details['get_loading_order_details'];

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
        setLoader(false)
    }, [route?.params?.details]))

    const Item = (item) => {
        return (
            <View style={[{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }]}>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width30, SemiBold, { color: 'gray' }]}>{item?.item?.order_details?.Order}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width30, SemiBold, { color: 'gray' }]}>{item?.item?.rice_name_details?.name}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width30, SemiBold, { color: 'gray' }]}>{item?.item?.rice_form_details?.form_name}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width30, SemiBold, { color: 'gray' }]}>{item?.item?.lotNo}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width30, SemiBold, { color: 'gray' }]}>{item?.item?.packing_type_details}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width50, SemiBold, { color: 'gray' }]}>{item?.item?.packing_details}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width30, SemiBold, { color: 'gray' }]}>{item?.item?.bags}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width30, SemiBold, { color: 'gray' }]}>{item?.item?.weight}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width30, SemiBold, { color: 'gray' }]}>{item?.item?.rate}</Text>
                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width30, SemiBold, { color: 'gray' }]}>{item?.item?.amount}</Text>
            </View>
        )
    }
    return (
        <Layout >
            <View>
                <View>
                    {!loader ?
                        <View style={{}}>
                            <ScrollView>
                                <View>
                                    <View style={[{ flexDirection: 'row' }]}>
                                        <Text style={[{}, smallHeader, width30, { color: secondryColor }]}>Loading no:</Text>
                                        <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h3, { color: secondryColor }]}>{details?.loadingNumber}</Text>
                                    </View>
                                    <View style={[{ flexDirection: 'row' }]}>
                                        <Text style={[{}, smallHeader, width30, { color: secondryColor }]}>Party:</Text>
                                        <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h3, { color: secondryColor }]}>here</Text>
                                    </View>
                                    <View style={[{ flexDirection: 'row' }]}>
                                        <Text style={[{}, smallHeader, width30, { color: secondryColor }]}>Created At:</Text>
                                        <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h3, { color: secondryColor }]}>{details?.createdAt}</Text>
                                    </View>
                                    <View style={[{ flexDirection: 'row' }]}>
                                        <Text style={[{}, smallHeader, width30, { color: secondryColor }]}>Vehicle No:</Text>
                                        <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h3, { color: secondryColor }]}>{details?.vehicleNumber}</Text>
                                    </View>
                                    <View style={[{ flexDirection: 'row' }]}>
                                        <Text style={[{}, smallHeader, width30, { color: secondryColor }]}>Transport:</Text>
                                        <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h3, { color: secondryColor }]}>{details?.transportNumber}</Text>
                                    </View>
                                    <View style={[{ flexDirection: 'row' }]}>
                                        <Text style={[{}, smallHeader, width30, { color: secondryColor }]}>Driver:</Text>
                                        <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h3, { color: secondryColor }]}>{details?.driverName} ({details?.driverMobile})</Text>
                                    </View>
                                </View>

                                <View style={[{}, paddingVertical2]}>
                                    <ScrollView horizontal={true}>
                                        <View style={[{ borderColor: 'gray', borderWidth: 1 }]}>
                                            <View style={[{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }]}>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}>Order</Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}>Quality</Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}>Sub Quality </Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}>Lot No </Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}>Packing Type </Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width50, SemiBold]}>Packing Size(Kg) </Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}>Bags/pcs </Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}>Weight </Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}>Rate </Text>
                                                <Text style={[{ textAlign: 'center' }, h2, width30, SemiBold]}>Amount </Text>
                                            </View>

                                            <FlatList
                                                data={details?.get_loading_order_details}
                                                renderItem={({ item }) => <Item item={item} />}
                                                keyExtractor={item => item.id}
                                            />

                                            <View style={[{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }]}>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}>Total</Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width50, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}>{totalBags} Bags </Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}>{totalWeight} kg </Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h2, width30, SemiBold]}> </Text>
                                                <Text style={[{ textAlign: 'center' }, h2, width30, SemiBold]}>₹{totalAmount}/- </Text>
                                            </View>
                                            <View style={[{ flexDirection: 'row' }]}>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width50, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h3, width30, SemiBold]}>Other Charges +</Text>
                                                <Text style={[{ textAlign: 'center' }, h3, width30, SemiBold]}>₹{details?.plusCharges}/- </Text>
                                            </View>
                                            <View style={[{ flexDirection: 'row' }]}>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width50, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h3, width30, SemiBold]}>Other Charges +</Text>
                                                <Text style={[{ textAlign: 'center' }, h3, width30, SemiBold]}>₹{details?.minusCharges}/- </Text>
                                            </View>
                                            <View style={[{ flexDirection: 'row' }]}>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width50, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', color: '#000' }, h3, width30, SemiBold]}></Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', color: '#000', borderRightWidth: 1 }, h3, width30, SemiBold]}>Total Charges</Text>
                                                <Text style={[{ textAlign: 'center' }, h3, width30, SemiBold]}>₹{(parseFloat(totalAmount + parseFloat(details?.plusCharges)) - parseFloat(details?.minusCharges))}/- </Text>
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
                        :
                        null
                    }

                </View>
            </View>
        </Layout>
    );
}

export default LoadingOrderView;