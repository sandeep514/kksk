import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';

import Layout from '../layout/Layout';
import { Medium, Regular, SemiBold, h1, h2, h3, h4, h5, header, height100, mainHeader, marginBottom1, marginBottom2, p, padding5, paddingHorizontal2, paddingHorizontal5, paddingVertical1, paddingVertical5, primaryBackgroundColor, primaryColor, secondryBackgroundColor, secondryColor, smallHeader, width45 } from '../../res/assets/css/style';
import { get } from '../components/apiComponent';
import { Icon } from '@rneui/base';
import { useFocusEffect } from '@react-navigation/native';

function ListSampleFromAdmin({ navigation }): React.JSX.Element {

    const [DATA, setData] = useState([]);

    useFocusEffect(useCallback(() => {
        getPurchaseOrderList()
    }, []))

    useEffect(() => {
        getPurchaseOrderList();
    }, [])



    const getPurchaseOrderList = () => {
        get('list/requested/sample').then((res) => {
            console.log(res.data.data)
            setData(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    const convertedToDateTime = (date) => {
        return new Date(date).toLocaleString()
    }
    const Item = ({ item }: ItemProps) => (
        <Pressable onPress={() => { navigation.navigate('PurchaseOrderView', { details: item }) }} style={[styles.item, { borderRadius: 10, borderBottomColor: '#ededed', borderBottomWidth: 2 }, paddingHorizontal5, paddingVertical1]}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.title, h3, Medium, { color: '#000', marginTop: 2, fontWeight: 800 }]}>Enquiry No:</Text>
                <Text style={[styles.title, h2, { color: '#000' }]}> 100{item.id}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.title, h3, Medium, { color: '#000', marginTop: 2, fontWeight: 800 }]}>Enquiry of:</Text>
                <Text style={[styles.title, h2, { color: '#000' }]}> {item?.rice_name_rel?.name} {item?.rice_form_rel?.form_name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.title, h3, Medium, { color: '#000', marginTop: 2, fontWeight: 800 }]}>Enquiry on:</Text>
                <Text style={[styles.title, h2, { color: '#000' }]}> {convertedToDateTime(item?.created_at)} </Text>
            </View>
        </Pressable>
    );
    return (
        <Layout >
            <View style={[{ flex: 1 }]}>
                <View style={{ position: 'relative', }}>
                    <View style={{}}>
                        <View >
                            <FlatList
                                data={DATA}
                                renderItem={({ item }) => <Item item={item} />}
                                keyExtractor={item => item.id}
                            />

                        </View>
                    </View>

                </View>
                <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    <Pressable onPress={() => { navigation.navigate('SampleFromAdmin') }} style={[{ borderRadius: 100, padding: 15 }, secondryBackgroundColor]}>
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

export default ListSampleFromAdmin;