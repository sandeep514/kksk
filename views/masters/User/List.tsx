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
import DropdownComponent from '../../components/DropdownComponent';

function ListUser({ navigation }): React.JSX.Element {
    useFocusEffect(useCallback(() => {
        getSubQualityMasterList();
    }, []));

    const [user, setUser] = useState([]);
    const [role, setRole] = useState([]);
    const [selectedRole, setSelectedRole] = useState([]);
    const [loader, setLoader] = useState(false);

    const getSubQualityMasterList = () => {
        setLoader(true)

        get('list/user').then((res) => {
            setUser(res.data.data.user)
            setRole(res.data.data.role)
        }).catch((err) => {

        }).finally(() => {
            setLoader(false)
        })

    }

    const Item = ({ item }: ItemProps) => (
        <Pressable onPress={() => { navigation.navigate('EditUser', { details: item }) }} style={[styles.item, { borderRadius: 10, borderBottomColor: '#ededed', borderBottomWidth: 2 }, paddingHorizontal5, paddingVertical1]}>
            <Text style={[styles.title, h3, SemiBold]}>{item?.name}</Text>
        </Pressable>
    );
    return (
        <Layout >
            <View style={[{ flex: 1 }]}>
                <View style={{ position: 'relative', }}>
                    <ScrollView>
                        <View style={{}}>
                            <View >

                                <DropdownComponent items={role} placeholder={'User Role'} listname={'role_name'} selectedItem={(event, index) => {
                                    setSelectedRole(event.id)
                                }} />
                                {(loader) ?
                                    <View style={[{}, paddingVertical2]}>
                                        <ActivityIndicator size={20} />
                                    </View>
                                    :
                                    null
                                }
                                <FlatList
                                    data={user[selectedRole]}
                                    renderItem={({ item }) => <Item item={item} />}
                                    keyExtractor={item => item.id}
                                // refreshing={true}
                                // onRefresh={() => {
                                //     getSubQualityMasterList()
                                // }}
                                />

                            </View>
                        </View>
                    </ScrollView>

                </View>
                <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    <Pressable onPress={() => { navigation.navigate('AddUser', { role: role }) }} style={[{ borderRadius: 100, padding: 15 }, secondryBackgroundColor]}>
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

export default ListUser;