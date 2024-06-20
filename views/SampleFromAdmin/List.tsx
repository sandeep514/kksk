import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';

import Layout from '../layout/Layout';
import { Medium, Regular, SemiBold, h1, h2, h3, h4, h5, header, height100, mainHeader, marginBottom1, marginBottom2, p, padding5, paddingHorizontal2, paddingHorizontal5, paddingVertical1, paddingVertical5, primaryBackgroundColor, primaryColor, secondryBackgroundColor, secondryColor, smallHeader, width45 } from '../../res/assets/css/style';
import { get, post } from '../components/apiComponent';
import { Icon } from '@rneui/base';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function ListSampleFromAdmin({ navigation }): React.JSX.Element {

    const [DATA, setData] = useState([]);
    const [userRole, setUserRole] = useState();
    const [currentStatusList, setCurrentStatusList] = useState(1);

    useFocusEffect(useCallback(() => {
        getSampleFromAdmin()
        AsyncStorage.getItem('userDetails').then((res) => {
            let role = (JSON.parse(res)?.role)
            setUserRole(role)
        }).catch((err) => {

        })
    }, []))

    const getSampleFromAdmin = () => {
        AsyncStorage.getItem('userDetails').then((res) => {
            let userId = (JSON.parse(res)?.id)
            setUserRole((JSON.parse(res)?.role))
            get('list/sample/from/admin/' + userId).then((res) => {

                console.log(res.data.data)

                setData(res.data.data)
            }).catch((err) => {
                console.log(err)
            })
        }).catch((err) => {
            console.log(err)
        })

    }
    const convertedToDateTime = (date) => {
        return new Date(date).toLocaleString()
    }

    const updateStatus = (itemId, status) => {
        post('update/sample/from/admin/status', { id: itemId, status: status }).then((res) => {
            getSampleFromAdmin();
        }).catch((err) => {

        })
    }
    const Item = ({ item }: ItemProps) => (
        <View style={[{ borderBottomColor: '#ededed', borderBottomWidth: 2 }, paddingVertical1]}>
            <Pressable onPress={() => { navigation.navigate('PurchaseOrderView', { details: item }) }} style={[styles.item, { borderRadius: 10 }, paddingHorizontal5,]}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.title, h3, Medium, { color: '#000', marginTop: 2, fontWeight: 800 }]}>Enquiry No:</Text>
                    <Text style={[styles.title, h3, { color: '#000' }]}> 100{item.id}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.title, h3, Medium, { color: '#000', marginTop: 2, fontWeight: 800 }]}>Enquiry of:</Text>
                    <Text style={[styles.title, h3, { color: '#000' }]}> {item?.rice_name_rel?.name} {item?.rice_form_rel?.form_name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.title, h3, Medium, { color: '#000', marginTop: 2, fontWeight: 800 }]}>Enquiry on:</Text>
                    <Text style={[styles.title, h3, { color: '#000' }]}> {convertedToDateTime(item?.created_at)} </Text>
                </View>
                {(userRole == 2) ?
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.title, h3, Medium, { color: '#000', marginTop: 2, fontWeight: 800 }]}>Party:</Text>
                        <Text style={[styles.title, h3, { color: '#000' }]}> {item?.party?.companyname} </Text>
                    </View>
                    :
                    null
                }

            </Pressable>

            {(item?.status == 1) ?
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    <Pressable onPress={() => { updateStatus(item?.id, 2) }} style={[{ backgroundColor: 'lightgreen', width: '49%', borderRadius: 20 }, paddingVertical1]}>
                        <Text style={[h3, { textAlign: 'center', color: '#fff' }, SemiBold]}>Accept</Text>
                    </Pressable>

                    <View style={[{ width: '1%' }]}>
                    </View>

                    <Pressable onPress={() => { updateStatus(item?.id, 3) }} style={[{ backgroundColor: 'red', width: '50%', borderRadius: 20 }, paddingVertical1]}>
                        <Text style={[h3, { textAlign: 'center', color: '#fff' }, SemiBold]}>Reject</Text>
                    </Pressable>
                </View>
                :
                null
            }
            {(item?.status == 2) ?
                <Text style={{ textAlign: 'right', color: 'green', fontWeight: 'bold' }}>Accepted</Text>
                :
                null
            }
            {(item?.status == 3) ?
                <Text style={{ textAlign: 'right', color: 'red', fontWeight: 'bold' }}>Rejected</Text>
                :
                null
            }
        </View>
    );
    return (
        <Layout >
            <View style={[{ flex: 1 }]}>
                <View style={{ position: 'relative', }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable onPress={() => { setCurrentStatusList(1) }} style={[{ backgroundColor: (currentStatusList == 1) ? secondryColor : primaryColor, width: '32%', borderRadius: 20 }, paddingVertical1]}>
                            <Text style={{ textAlign: 'center' }}>Pending</Text>
                        </Pressable>
                        <Pressable onPress={() => { setCurrentStatusList(2) }} style={[{ backgroundColor: (currentStatusList == 2) ? secondryColor : primaryColor, width: '32%', borderRadius: 20 }, paddingVertical1]}>
                            <Text style={{ textAlign: 'center' }}>Accepted</Text>
                        </Pressable>
                        <Pressable onPress={() => { setCurrentStatusList(3) }} style={[{ backgroundColor: (currentStatusList == 3) ? secondryColor : primaryColor, width: '32%', borderRadius: 20 }, paddingVertical1]}>
                            <Text style={{ textAlign: 'center' }}>Rejected</Text>
                        </Pressable>
                    </View>
                    <View style={{}}>
                        <View >
                            <FlatList
                                data={DATA[currentStatusList]}
                                renderItem={({ item }) => <Item item={item} />}
                                keyExtractor={item => item.id}
                            />

                        </View>
                    </View>

                </View>
                {(userRole == 2) ?
                    <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                        <Pressable onPress={() => { navigation.navigate('SampleFromAdmin') }} style={[{ borderRadius: 100, padding: 15 }, secondryBackgroundColor]}>
                            <Text style={[{ color: primaryColor, }, mainHeader, {}]}><Icon name='add' color={primaryColor} /></Text>
                        </Pressable>
                    </View>
                    :
                    null
                }

            </View>
        </Layout>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        // marginVertical: 8,
        width: '100%'
    },
    title: {
        fontSize: 32,
    },
});

export default ListSampleFromAdmin;