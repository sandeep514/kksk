import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { height2, height8, height84, marginBottom1, paddingHorizontal3, paddingTop1, primaryBackgroundColor, primaryColor, secondryColor, paddingBottom5, paddingVertical41, paddingVertical2, height1, height3, paddingVertical3, paddingHorizontal2, height85 } from '../../res/assets/css/style';
import { Text } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';
import { ScrollView } from 'react-native-gesture-handler';


function Layout({ children }): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';


    return (
        <SafeAreaView style={{}}>
            <StatusBar
                backgroundColor={primaryColor}
            />
            <View style={{}}>
                {/* header */}
                <View style={[{ justifyContent: 'center' }, height8, { backgroundColor: '#fff' }]}>
                    <Header />
                </View>

                {/* body */}
                <View style={[{}, height84, paddingHorizontal3, { backgroundColor: '#fff' }]}>
                    <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                        <View style={[marginBottom1, { flex: 1 }]} >

                            {children}
                        </View>
                    </KeyboardAvoidingView>

                </View>

                {/* {(loading) ?
                    <LoadingComponent />
                    : null
                } */}
                {/* Footer */}
                <View style={[{}, height8, primaryBackgroundColor, paddingTop1]}>
                    <Footer />
                </View>
                <View style={[height2, primaryBackgroundColor]}>
                </View>
            </View>

        </SafeAreaView >
    );
}


export default Layout;
