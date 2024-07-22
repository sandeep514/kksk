import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Pressable, StatusBar, StyleSheet, Text, View, ScrollView, ActivityIndicator, Modal } from 'react-native';

import Layout from '../../layout/Layout';
import {
    Bold,
    Medium,
    SemiBold,
    button,
    buttonClose,
    centeredView,
    h2,
    h3,
    h4,
    mainHeader,
    modalText,
    modalView,
    paddingHorizontal3,
    paddingHorizontal5,
    paddingVertical1,
    paddingVertical2,
    primaryBackgroundColor,
    primaryColor,
    secondryBackgroundColor,
    secondryColor,
    textStyle,
    width10,
    width20,
    width40,
    width80,
} from '../../../res/assets/css/style';
import { ShowToast, get } from '../../components/apiComponent';
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
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteLoader, setdeleteLoader] = useState(false);
    const [selectedDeleteItem, setSelectedDeleteItem] = useState();

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
    const deleteQuality = () => {
        let deletedItemId = selectedDeleteItem;
        setdeleteLoader(true)
        get('delete/qualities/' + deletedItemId).then((res) => {
            ShowToast('Item deleted successfully')
            setModalVisible(!modalVisible)
            getQualityMasterList();
        }).catch((err) => {
        }).finally(() => {
            setdeleteLoader(false)
        })
    }
    const Item = ({ item }: ItemProps) => (
        <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={[{ width: '70%' }]}>
                <Pressable onPress={() => { navigation.navigate('EditQuality', { details: item }) }} style={[styles.item, { borderRadius: 10, borderBottomColor: '#ededed', borderBottomWidth: 2 }, paddingHorizontal5, paddingVertical1]}>
                    <Text style={[styles.title, h3, SemiBold]}>{item.name}</Text>
                </Pressable>

            </View>
            <View style={[{ alignSelf: 'center', width: '20%' }]}>
                <Pressable onPress={() => {
                    setModalVisible(true)
                    setSelectedDeleteItem(item?.id)
                }} style={[{}, paddingVertical1]}><Text style={[{}, h3, Bold, { color: 'red', textAlign: 'center', width: '100%' }]}>Delete</Text></Pressable>
            </View>
        </View>
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
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <View style={[{}, centeredView]}>
                                    <View style={modalView}>
                                        <Text style={[{ color: '#000' }, h3]}>Are you sure, you want to delete this.?</Text>
                                        {(deleteLoader) ?
                                            <View style={[button, buttonClose]} >
                                                <ActivityIndicator />
                                            </View>
                                            :
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '60%', marginTop: 20 }}>
                                                <View>
                                                    <Pressable
                                                        style={[button, buttonClose]}
                                                        onPress={() => { deleteQuality() }}>
                                                        <Text style={[{}, textStyle]}>Delete Now</Text>
                                                    </Pressable>
                                                </View>

                                                <View>
                                                    <Pressable
                                                        style={[button, buttonClose, { backgroundColor: 'red' }]}
                                                        onPress={() => { setModalVisible(false) }}>
                                                        <Text style={[{}, textStyle]}>Cancel</Text>
                                                    </Pressable>
                                                </View>
                                            </View>
                                        }
                                    </View>
                                </View>
                            </Modal>
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