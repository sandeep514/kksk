import React from 'react';
import { FlatList, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';

import Layout from '../layout/Layout';
import { Medium, Regular, SemiBold, h1, h2, h3, h4, h5, header, height100, mainHeader, marginBottom1, marginBottom2, p, padding5, paddingHorizontal2, paddingHorizontal5, paddingVertical1, paddingVertical5, primaryBackgroundColor, primaryColor, secondryBackgroundColor, secondryColor, smallHeader, width45 } from '../../res/assets/css/style';

function ListProductionLotNumber({ navigation }): React.JSX.Element {



    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];
    const Item = ({ title }: ItemProps) => (
        <Pressable onPress={() => { navigation.navigate('PurchaseOrderView') }} style={[styles.item, { backgroundColor: '#efefef', borderRadius: 10 }, paddingHorizontal5, paddingVertical1]}>
            <Text style={[styles.title, h2, Medium, { color: '#000' }]}>{title}</Text>
            <Text style={[styles.title, h3, SemiBold]}>{title}</Text>
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
                                renderItem={({ item }) => <Item title={item.title} />}
                                keyExtractor={item => item.id}
                            />

                        </View>
                    </View>

                </View>
                <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    <Pressable onPress={() => { navigation.navigate('PurchaseOrder') }} style={[{ height: 70, width: 70, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }, secondryBackgroundColor]}>
                        <Text style={[{ color: primaryColor }, header]}>+</Text>
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

export default ListProductionLotNumber;