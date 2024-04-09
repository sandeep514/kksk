import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';

import Layout from '../layout/Layout';
import { Regular, SemiBold, smallHeader, h1, width30, width50, h2, h3, paddingVertical2, primaryColor, secondryColor, h4, smallTitle, width60, paddingVertical1, width10, paddingLeft2 } from '../../res/assets/css/style';
import { get } from '../components/apiComponent';

function AnalysisReportLabInchargeView({ route }): React.JSX.Element {

    const [details, setDetails] = useState();
    const [sampleLabReportDetails, setSampleLabReportDetails] = useState({});
    const [samplePhysicalParams, setSamplePhysicalParams] = useState({});
    const [sampleCookingParams, setSanpleCookingParams] = useState({});
    const [physicalParams, setPhysicalParams] = useState({});
    const [cookingParams, setCookingParams] = useState({});

    useEffect(() => {
        let order_id = (route.params.details['order_id'])
        let qualityId = (route.params.details['qualityId'])
        getSampleReportByOrderAndQuality(order_id, qualityId);

        setPhysicalParams(route.params.details[0]['physical'])
        setCookingParams(route.params.details[0]['Cooking / Organolepic'])
        setDetails(route.params.details)

        // getSampleReportByOrderAndQuality();
    }, [])

    const getSampleReportByOrderAndQuality = (orderId, qualityId) => {
        get('get/sample/report/' + orderId + '/' + qualityId).then((res) => {
            console.log(res.data.data[0]?.physical['Average Grain Length in mm']);
            setSamplePhysicalParams(res.data.data[0]['physical'])
            setSanpleCookingParams(res.data.data[0]['Cooking / Organolepic'])
        }).catch((err) => {
            console.log(err)
        }).finally(() => {

        })
    }

    return (
        <Layout >
            <View>
                <View>
                    <View style={{}}>
                        <ScrollView>
                            <View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Order No:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.get_order_details[0].Order}</Text>
                                </View>

                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Loading No:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.loadingNumber}</Text>
                                </View>

                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Analysis No:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.analysis_no}</Text>
                                </View>


                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Party Name:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.get_order_details[0].party_details?.name}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Quality:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.get_order_details[0]?.purchase_order_details[0]?.rice_name_details?.name}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Sub Quality:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.get_order_details[0]?.purchase_order_details[0]?.rice_form_details?.form_name}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Packing Type:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.get_order_details[0]?.purchase_order_details[0]?.packing_type_details?.name}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Packing Size:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.get_order_details[0]?.purchase_order_details[0]?.packing_details?.code}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Vehicle no:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.get_loading_details?.vehicleNumber}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Lot no:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.get_order_details[0]?.purchase_order_details[0]?.lotNo}</Text>
                                </View>
                                {/* <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>No of bags:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.get_order_details[0]?.purchase_order_details[0]?.bags}</Text>
                                </View> */}
                            </View>

                            <View style={[{}, paddingVertical2]}>
                                <View style={{ marginTop: 10 }}>
                                    <ScrollView horizontal={true}>
                                        <View style={[{ borderColor: 'gray', borderWidth: 1 }]}>
                                            <View style={[{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }]}>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, paddingVertical1, width10, SemiBold]}>S.No</Text>

                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, paddingVertical1, width60, SemiBold]}>PARAMETERS PHYSICAL</Text>

                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, paddingVertical1, width30, SemiBold]}>SAMPLE LAB REPORT</Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, paddingVertical1, width30, SemiBold]}>RESULT</Text>
                                            </View>
                                            {(physicalParams) ?
                                                Object.keys(physicalParams).map((item, index) => {
                                                    return (
                                                        <View style={[{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }]}>
                                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width10, SemiBold, paddingVertical1, { color: secondryColor }]}>{(index + 1)}</Text>

                                                            <Text style={[{ textAlign: 'left', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width60, SemiBold, paddingVertical1, paddingLeft2, { color: secondryColor }]}>{item}</Text>

                                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width30, SemiBold, paddingVertical1, { color: secondryColor }]}>{samplePhysicalParams?.[item]}</Text>

                                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width30, SemiBold, paddingVertical1, { color: secondryColor }]}>{physicalParams[item]}</Text>
                                                        </View>
                                                    )
                                                })

                                                :
                                                null
                                            }


                                            {/* <FlatList
                                                data={physicalParams}
                                                renderItem={({ item }) => <Item item={item} />}
                                                keyExtractor={item => item.id}
                                            /> */}
                                        </View>
                                    </ScrollView>
                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <ScrollView horizontal={true}>
                                        <View style={[{ borderColor: 'gray', borderWidth: 1 }]}>
                                            <View style={[{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }]}>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, paddingVertical1, width10, SemiBold]}>S.No</Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, paddingVertical1, width60, SemiBold]}>PARAMETERS COOKING</Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, paddingVertical1, width30, SemiBold]}>SAMPLE LAB REOPRT</Text>
                                                <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, paddingVertical1, width30, SemiBold]}>RESULT</Text>
                                            </View>
                                            {(cookingParams) ?
                                                Object.keys(cookingParams).map((item, index) => {
                                                    return (
                                                        <View style={[{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }]}>
                                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width10, SemiBold, paddingVertical1, { color: secondryColor }]}>{(index + 1)}</Text>

                                                            <Text style={[{ textAlign: 'left', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width60, SemiBold, paddingVertical1, paddingLeft2, { color: secondryColor }]}>{item}</Text>

                                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width30, SemiBold, paddingVertical1, { color: secondryColor }]}>{sampleCookingParams?.[item]}</Text>

                                                            <Text style={[{ textAlign: 'center', borderRightColor: 'gray', borderRightWidth: 1 }, h4, width30, SemiBold, paddingVertical1, { color: secondryColor }]}>{cookingParams[item]}</Text>
                                                        </View>
                                                    )
                                                })

                                                :
                                                null
                                            }
                                            {/* <FlatList
                                                data={cookingParams}
                                                renderItem={({ item }) => <Item item={item} />}
                                                keyExtractor={item => item.id}
                                            /> */}
                                        </View>
                                    </ScrollView>
                                </View>

                            </View>

                            <View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, SemiBold, width30, { color: secondryColor }]}>REMARKS:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{(details?.remarks)}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, SemiBold, width30, { color: secondryColor }]}>STATUS:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{(details?.status == 1) ? 'Pending' : (details?.status == 2) ? 'Accepted' : 'Rejected'}</Text>
                                </View>
                            </View>

                            <View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, SemiBold, width30, { color: secondryColor }]}>Prepared By:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{(details?.additionalInfo) ?? 'not-available'}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, SemiBold, width30, { color: secondryColor }]}>Modified By:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{(details?.additionalInfo) ?? 'not-available'}</Text>
                                </View>
                            </View>


                        </ScrollView>
                    </View>
                </View>
            </View>
        </Layout>
    );
}

export default AnalysisReportLabInchargeView;