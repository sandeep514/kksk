import React, { memo, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';

import Layout from '../layout/Layout';
import { Medium, Regular, SemiBold, h1, h2, h3, h4, h5, header, height100, mainHeader, marginBottom1, marginBottom2, p, padding5, paddingHorizontal2, paddingHorizontal5, paddingVertical1, paddingVertical5, primaryBackgroundColor, primaryColor, secondryBackgroundColor, secondryColor, smallHeader, width45 } from '../../res/assets/css/style';
import { get } from '../components/apiComponent';
import { Icon } from '@rneui/base';
import { useFocusEffect } from '@react-navigation/native';

function ListLoadingOrder({ navigation }): React.JSX.Element {

    useFocusEffect(useCallback(() => {
        getPurchaseOrderList();
    }, []))

    const [DATA, setData] = useState({});
    const [loader, setLoader] = useState(false);

    const getPurchaseOrderList = () => {
        setLoader(true)
        get('get/loading/order/list').then((res) => {
            setData(res.data.data)
        }).catch((err) => {

        }).finally(() => {
            setLoader(false)
        })
    }

    const Item = ({ item }: ItemProps) => (
        <Pressable onPress={() => { console.log(item), navigation.navigate('LoadingOrderView', { details: item }) }} style={[styles.item, { borderRadius: 10, borderBottomColor: '#ededed', borderBottomWidth: 2 }, paddingHorizontal5, paddingVertical1]}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.title, h3, Medium, { color: '#000', marginTop: 2 }]}>Loading No:</Text>
                <Text style={[styles.title, h2, { color: '#000' }]}> {item?.loadingNumber}</Text>
            </View>
            <Text style={[styles.title, h3, SemiBold]}>{item?.createdAt}</Text>
        </Pressable>
    );
    return (
        <Layout >
            <View style={[{ flex: 1 }]}>
                <View style={{ position: 'relative' }}>
                    <View style={{}}>
                        {(loader) ?
                            <ActivityIndicator />
                            :
                            <View >
                                <FlatList
                                    data={DATA}
                                    renderItem={({ item }) => <Item item={item} />}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        }

                    </View>
                </View>
                <View style={{ position: 'absolute', bottom: 0, right: 0 }}>


                    <Pressable onPress={() => { navigation.navigate('LoadingOrder') }} style={[{ borderRadius: 100, padding: 15 }, secondryBackgroundColor]}>
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

export default ListLoadingOrder;