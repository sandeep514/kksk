import React from 'react';

import { h2, h3, h4, h5, h6, marginBottom1, marginBottom2, Medium, primaryColor, secondryColor, SemiBold, title } from '../../../res/assets/css/style'
import { StyleSheet, Text, TextInput, View } from 'react-native';

function InputComponent({ editable = true, value, placeholder, onChange, keyboardType = 'default' }): React.JSX.Element {

    return (
        <View >
            <Text style={[{ color: secondryColor }, h3, SemiBold]}>{placeholder}</Text>
            <TextInput keyboardType={keyboardType} editable={editable} defaultValue={value} value={value} placeholderTextColor="gray" placeholder={placeholder} onChangeText={(event) => { onChange(event) }} style={[stylesheet.inputStyle, h3, Medium, marginBottom1]} />
        </View>
    );
}

export default InputComponent
const stylesheet = StyleSheet.create({
    inputStyle: { backgroundColor: '#f0f0f0', borderRadius: 5, paddingHorizontal: 15,color: '#000' },
    containerStyle: { borderRadius: 10, padding: 0, margin: 0, backgroundColor: '#f0f0f0',color: '#000' },
    inputContainerStyle: { borderRadius: 10, borderBottomWidth: 0, margin: 0, padding: 0, backgroundColor: '#f0f0f0',color: '#000' }
})