import React from 'react';
import { View, ScrollView } from 'react-native';

import Layout from '../layout/Layout';
import DropdownComponent from '../components/DropdownComponent';
import InputComponent from '../components/InputComponent/Index';
import ButtonComponent from '../components/ButtonComponent/Index';

function RawMaterialOut(): React.JSX.Element {



    return (
        <Layout >
            <View>
                <View>
                    <View style={{}}>
                        <ScrollView>

                            <InputComponent placeholder={'Order No'} onChange={(value) => { console.log(value) }} />

                            <DropdownComponent placeholder={'Party Name'} onChange={() => { console.log("here") }} />

                            {/* //address */}
                            <InputComponent placeholder={'Address'} onChange={(value) => { console.log(value) }} />
                            {/* //Mobile */}
                            <InputComponent placeholder={'Mobile'} onChange={(value) => { console.log(value) }} />
                            {/* //GST */}
                            <InputComponent placeholder={'GSTIN'} onChange={(value) => { console.log(value) }} />
                            {/* //Quality Name */}
                            <DropdownComponent placeholder={'Quality Name'} onChange={() => { console.log("here") }} />
                            {/* //Sub Quality Name */}
                            <DropdownComponent placeholder={'Sub Quality Name'} onChange={() => { console.log("here") }} />
                            {/* //Lot No */}
                            <InputComponent placeholder={'Lot No'} onChange={(value) => { console.log(value) }} />
                            {/* //Packing Type */}
                            <DropdownComponent placeholder={'Packing Type'} onChange={() => { console.log("here") }} />
                            {/* //Packing Size */}
                            <DropdownComponent placeholder={'Packing Size'} onChange={() => { console.log("here") }} />
                            {/* //Bags/pcs */}
                            <InputComponent placeholder={'Bags/pcs'} onChange={(value) => { console.log(value) }} />
                            {/* //Weight */}
                            <InputComponent placeholder={'Weight'} onChange={(value) => { console.log(value) }} />
                            {/* //Rate */}
                            <InputComponent placeholder={'Rate'} onChange={(value) => { console.log(value) }} />
                            {/* //Amount */}
                            <InputComponent placeholder={'Amount'} onChange={(value) => { console.log(value) }} />


                            <ButtonComponent />

                        </ScrollView>
                    </View>
                </View>
            </View>
        </Layout>
    );
}

export default RawMaterialOut;