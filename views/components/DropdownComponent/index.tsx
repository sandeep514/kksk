import React, { useEffect, useState } from 'react';

import { Icon, Input, Text } from '@rneui/base';
import { Bold, h2, h3, h4, h5, height2, marginBottom1, marginBottom2, marginLeft1, marginLeft2, marginLeft5, marginTop1, marginTop5, Medium, Regular, secondryColor, SemiBold } from '../../../res/assets/css/style'
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import SelectDropdown from "react-native-select-dropdown";

function DropdownComponent({ defaultValue, items, placeholder, listname, selectedItem }): React.JSX.Element {


    useEffect(() => {

    }, [])
    return (

        <View style={[marginBottom1]}>
            <Text style={[{ color: secondryColor }, h3, SemiBold]}>{placeholder}</Text>

            <View style={[stylesheet.container]}>
                <SelectDropdown

                    renderDropdownIcon={isOpened => {
                        return (
                            <Icon
                                name={isOpened ? 'chevron-up' : 'chevron-down'}
                                color={'#000'}
                                size={14}
                                type="font-awesome"
                            />
                        );
                    }}
                    search={true}
                    searchInputStyle={{
                        borderRadius: 100,
                        borderWidth: 2,
                        borderColor: '#ededed',
                        margin: 10,
                        width: '80%',
                        alignSelf: 'center',
                    }}
                    searchInputTxtColor="gray"
                    searchPlaceHolder="Search Store"
                    data={items}
                    rowTextStyle={{
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        fontSize: 12,
                    }}
                    dropdownStyle={{
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        height: '60%',
                    }}
                    buttonStyle={{
                        backgroundColor: 'transparent',
                        width: '100%',
                        alignContent: 'flex-start',
                        alignSelf: 'flex-start',
                    }}
                    buttonTextStyle={[{ color: '#000', textAlign: 'left' }, Regular, h4, Medium]}
                    defaultButtonText={(defaultValue) ?? placeholder}
                    onSelect={(item, index) => {
                        selectedItem(item, index)
                    }}
                    buttonTextAfterSelection={(item, index) => {
                        return item[listname];
                    }}
                    rowTextForSelection={(item, index) => {
                        return item[listname];
                    }}
                    defaultValueByIndex={defaultValue}
                    defaultValue={defaultValue}
                />


            </View>



        </View>
    );
}

export default DropdownComponent
const stylesheet = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 0,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',

    }
})
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});