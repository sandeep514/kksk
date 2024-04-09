import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';

import Layout from '../layout/Layout';
import {
    Medium,
    SemiBold,
    h2,
    h3,
    mainHeader,
    paddingHorizontal5,
    paddingVertical1,
    primaryColor,
    secondryBackgroundColor,
} from '../../res/assets/css/style';
import { get } from '../components/apiComponent';
import { Icon } from '@rneui/base';
import { useFocusEffect } from '@react-navigation/native';

function ListSampleLabReport({ navigation }): React.JSX.Element {



    useEffect(() => {
        getPurchaseOrderList();
    }, [])
    useFocusEffect(useCallback(() => {
        getPurchaseOrderList();
    } , []))

    const [DATA, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    const getPurchaseOrderList = () => {
        setLoader(true)
        get('get/sample/report/list').then((res) => {
            setData(res.data.data)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoader(false)
        })
    }
    const Item = ({ item }: ItemProps) => (
        <Pressable onPress={() => { navigation.navigate('ViewSampleLabReport', { details: item }) }} style={[styles.item, { borderRadius: 10, borderBottomColor: '#ededed', borderBottomWidth: 2 }, paddingHorizontal5, paddingVertical1]}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.title, h3, Medium, { color: '#000', marginTop: 2 }]}>Purchase No:</Text>
                <Text style={[styles.title, h2, { color: '#000' }]}> {item?.get_order_details[0]?.Order}</Text>
            </View>
            <Text style={[styles.title, h3, SemiBold]}>{item?.get_order_details[0]?.party_details?.name}</Text>
        </Pressable>
    );
    return (
        <Layout >
            <View style={[{ flex: 1 }]}>
                <View style={{ position: 'relative', }}>
                    <View style={{}}>
                        <View >
                            {(loader) ?
                                <ActivityIndicator />
                            :
                                null
                            }
                            <FlatList
                                data={DATA}
                                renderItem={({ item }) => <Item item={item} />}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>

                </View>
                <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    <Pressable onPress={() => { navigation.navigate('SampleLabReports') }} style={[{ borderRadius: 100, padding: 15 }, secondryBackgroundColor]}>
                        <Text style={[{ color: primaryColor, }, mainHeader, {}]}><Icon name='add' color={primaryColor} /></Text>
                    </Pressable>
                </View>

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
        marginVertical: 8,
        width: '100%'
    },
    title: {
        fontSize: 32,
    },
});

export default ListSampleLabReport;