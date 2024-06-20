import React, { useCallback, useEffect, useState } from 'react';
import { View, Pressable } from 'react-native';

import DropdownComponent from '../../components/DropdownComponent';
import InputComponent from '../../components/InputComponent/Index';
import { padding2, paddingHorizontal1, paddingHorizontal2, paddingVertical1, paddingVertical2, primaryButton, secondryButton, secondryBackgroundColor } from '../../../res/assets/css/style';
import { Text } from '@rneui/base';
import { get } from '../../components/apiComponent';

function WandAdderComponent({ defaultValue, minid, index, deleteIndex, setFormData, grade }): React.JSX.Element {

    const [data, setData] = useState(defaultValue);
    const [selectedBrand, setselectedBrand] = useState();

    useEffect(() => {
        console.log('====================================');
        console.log(grade);
        console.log('====================================');
    }, [])
    useEffect(() => {
        setFormData(data)
    }, [data])


    return (
        <View style={{ marginBottom: 20, }}>
            <View style={{ alignContent: 'left', alignItems: 'left', flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={[{ backgroundColor: '#f0f0f0' }, paddingHorizontal2, paddingVertical1]}>
                    <Text>Row {index + 1}</Text>
                </View>
                <View style={[{ backgroundColor: '#f0f0f0' }]}>
                    <Pressable onPress={() => { deleteIndex(minid) }} style={[{}, secondryBackgroundColor, paddingVertical1, paddingHorizontal2]}>
                        <Text style={{ color: '#fff' }}>Delete</Text>
                    </Pressable>
                </View>
            </View>
            <View style={[{ borderWidth: 2, borderColor: '#f0f0f0' }, paddingHorizontal2, paddingVertical2]}>

                <DropdownComponent defaultValue={data?.grade} items={grade} placeholder={'Rice Sub Quality'} listname={'type'} selectedItem={(event, index) => {
                    setData((previousState) => (
                        { ...previousState, grade: event }
                    ))
                }} />
            </View>
        </View>
    );
}

export default WandAdderComponent;