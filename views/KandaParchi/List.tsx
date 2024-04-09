import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';

import Layout from '../layout/Layout';
import {
    Medium,
    SemiBold,
    h2,
    h3,
    h4,
    mainHeader,
    paddingHorizontal5,
    paddingVertical1,
    primaryColor,
    secondryBackgroundColor,
} from '../../res/assets/css/style';
import { get } from '../components/apiComponent';
import { Icon } from '@rneui/base';
import { useFocusEffect } from '@react-navigation/native';

function ListKandaParchi({ navigation }): React.JSX.Element {



    useEffect(() => {
        getKandaParchiList();
    }, [])
    useFocusEffect(useCallback(() => {
        getKandaParchiList();
    }, []))

    const [DATA, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    const getKandaParchiList = () => {
        setLoader(true)
        get('get/kanda/parchi/list').then((res) => {
            console.log('res.data.dataaa')
            console.log(res.data.data)
            setData(res.data.data)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoader(false)
        })
    }

    const parseDateTimeToDate = (date) => {
        let parseDate = new Date(date);

        let Year = parseDate.getFullYear();
        let Month = ((parseDate.getMonth() + 1) < 10) ? '0' + (parseDate.getMonth() + 1) : parseDate.getMonth() + 1;
        let day = ((parseDate.getDay() + 1) < 10) ? '0' + (parseDate.getDay()) : parseDate.getDay();
        console.log(parseDate);

        return day + '-' + Month + '-' + Year;
    }

    const Item = ({ item }: ItemProps) => (
        <Pressable onPress={() => { navigation.navigate('KandaParchiView', { details: item }) }} style={[styles.item, { borderRadius: 10, borderBottomColor: '#ededed', borderBottomWidth: 2 }, paddingHorizontal5, paddingVertical1]}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.title, h3, Medium, { color: '#000', marginTop: 2 }]}>Kanda Parchi:</Text>
                <Text style={[styles.title, h2, { color: '#000' }]}> {item?.kandaParchiId}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.title, h4, Medium, { color: '#000', marginTop: 2 }]}>Date:</Text>
                <Text style={[styles.title, h4, { color: '#000', marginTop: 2 }]}> {parseDateTimeToDate(item?.created_at)}</Text>
            </View>
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
                    <Pressable onPress={() => { navigation.navigate('KandaParchi') }} style={[{ borderRadius: 100, padding: 15 }, secondryBackgroundColor]}>
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

export default ListKandaParchi;