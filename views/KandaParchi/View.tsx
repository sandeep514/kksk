import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';

import Layout from '../layout/Layout';
import {
    SemiBold,
    width30,
    h3,
    paddingVertical2,
    secondryColor,
    h4,
    width60,
    paddingVertical1,
    width10,
    paddingLeft2,
} from '../../res/assets/css/style';
import { get } from '../components/apiComponent';

function KandaParchiView({ route }): React.JSX.Element {

    const [details, setDetails] = useState();
    const [sampleLabReportDetails, setSampleLabReportDetails] = useState({});
    const [samplePhysicalParams, setSamplePhysicalParams] = useState({});
    const [sampleCookingParams, setSanpleCookingParams] = useState({});
    const [physicalParams, setPhysicalParams] = useState({});
    const [cookingParams, setCookingParams] = useState({});

    useEffect(() => {
      console.log(route.params.details)
        // let qualityId = (route.params.details['qualityId'])
        
        setDetails(route.params.details)

        // getSampleReportByOrderAndQuality();
    }, [])

    // const getSampleReportByOrderAndQuality = (orderId, qualityId) => {
    //     get('get/sample/report/' + orderId + '/' + qualityId).then((res) => {
    //         console.log(res.data.data[0]?.physical['Average Grain Length in mm']);
    //         setSamplePhysicalParams(res.data.data[0]['physical'])
    //         setSanpleCookingParams(res.data.data[0]['Cooking / Organolepic'])
    //     }).catch((err) => {
    //         console.log(err)
    //     }).finally(() => {

    //     })
    // }

    return (
        <Layout >
            <View>
                <View>
                    <View style={{}}>
                        <ScrollView>
                            <View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Order No</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.order_details?.Order}</Text>
                                </View>

                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Quality</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.rice_name_details?.name} {details?.rice_form_details?.form_name}</Text>
                                </View>
                                
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>kanda Parchi Id</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.kandaParchiId}</Text>
                                </View>


                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Vehicle No:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.vehicleNo}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Gross Weight:</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.grossWeight}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Tare Weight</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.tareWeight}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Net Weight</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.netWeight}</Text>
                                </View>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={[{}, h3, width30, SemiBold, { color: secondryColor }]}>Gate Pass No</Text>
                                    <Text style={[{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', textTransform: 'capitalize' }, h4, { color: secondryColor }]}>{details?.gatePassNo}</Text>
                                </View>



                                
                            </View>

                        </ScrollView>
                    </View>
                </View>
            </View>
        </Layout>
    );
}

export default KandaParchiView;