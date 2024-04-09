import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Pressable, StatusBar, StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';

import Layout from '../../layout/Layout';
import {
    Medium,
    SemiBold,
    h2,
    h3,
    h4,
    mainHeader,
    paddingHorizontal3,
    paddingHorizontal5,
    paddingVertical1,
    paddingVertical2,
    primaryBackgroundColor,
    primaryColor,
    secondryBackgroundColor,
    secondryColor,
    width40,
} from '../../../res/assets/css/style';
import { get } from '../../components/apiComponent';
import { Icon } from '@rneui/base';
import { useFocusEffect } from '@react-navigation/native';

function ListQuality({ navigation }): React.JSX.Element {



    useFocusEffect(useCallback(() => {
        getQualityMasterList();
    }, []));

    const [basmati, setBasmati] = useState([]);
    const [nonBasmati, setNonBasmati] = useState([]);
    const [selectedTab, setSelectedTab] = useState('basmati');
    const [loader, setLoader] = useState(false);

    const getQualityMasterList = () => {
        setLoader(true)
        get('list/qualities').then((res) => {
            setBasmati(res.data.data['basmati'])
            setNonBasmati(res.data.data['nonBasmati'])
        }).catch((err) => {

        }).finally(() => {
            setLoader(false)
        })
    }
    const Item = ({ item }: ItemProps) => (
        <Pressable onPress={() => { navigation.navigate('PurchaseOrderView', { details: item }) }} style={[styles.item, { borderRadius: 10, borderBottomColor: '#ededed', borderBottomWidth: 2 }, paddingHorizontal5, paddingVertical1]}>
            <Text style={[styles.title, h3, SemiBold]}>{item.name}</Text>
        </Pressable>
    );
    return (
        <Layout >
            <View style={[{ flex: 1 }]}>
                <View style={{ position: 'relative', }}>
                    <ScrollView>
                        <View style={{}}>
                            <View >
                                <View style={[{ flexDirection: 'row', justifyContent: 'space-around' }]}>
                                    <View>
                                        <Pressable style={(selectedTab == 'basmati') ? styles.selectedTab : styles.unSelectedTab} onPress={() => { setSelectedTab('basmati') }}>
                                            <Text style={[{ textAlign: 'center', color: secondryColor, }, h2]}>Basmati</Text>
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Pressable style={(selectedTab == 'non-basmati') ? styles.selectedTab : styles.unSelectedTab} onPress={() => { setSelectedTab('non-basmati') }}>
                                            <Text style={[{ textAlign: 'center', color: secondryColor, }, h2]}>Non Basmati</Text>
                                        </Pressable>
                                    </View>
                                </View>
                                {(loader) ?
                                    <View style={[{}, paddingVertical2]}>
                                        <ActivityIndicator size={20} />
                                    </View>
                                    :
                                    null}

                                <FlatList
                                    data={(selectedTab == 'basmati') ? basmati : nonBasmati}
                                    renderItem={({ item }) => <Item item={item} />}
                                    keyExtractor={item => item.id}
                                />

                            </View>
                        </View>
                    </ScrollView>

                </View>
                <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    <Pressable onPress={() => { navigation.navigate('AddQuality') }} style={[{ borderRadius: 100, padding: 15 }, secondryBackgroundColor]}>
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
    selectedTab: {
        paddingVertical: 10,
        backgroundColor: primaryColor,
        borderWidth: 2,
        borderColor: primaryColor,
        width: '100%',
        paddingHorizontal: 30,
        borderRadius: 100
    },
    unSelectedTab: {
        paddingVertical: 10,
        borderColor: primaryColor,
        borderWidth: 2,
        width: '100%',
        paddingHorizontal: 30,
        borderRadius: 100
    }
});

export default ListQuality;