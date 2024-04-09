

import React, { useState } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import PriceEnquiry from './views/PriceEnquiry/Index';
import PriceEnquiryView from './views/PriceEnquiry/View';
import ListPriceEnquiry from './views/PriceEnquiry/List';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from './views/layout/AppNavigator';
import AnalysisReportLabIncharge from './views/AnalysisReportLabIncharge/Index';
import AnalysisReportLabInchargeView from './views/AnalysisReportLabIncharge/View';
import ListAnalysisReportLabIncharge from './views/AnalysisReportLabIncharge/List';

import FinishedGoodIn from './views/FinishedGoodIn/Index';
import FinishedGoodInView from './views/FinishedGoodIn/View';
import ListFinishedGoodIn from './views/FinishedGoodIn/List';
import FinishedGoodOut from './views/FinishedGoodOut/Index';
import FinishedGoodOutView from './views/FinishedGoodOut/View';
import ListFinishedGoodOut from './views/FinishedGoodOut/List';
import FinishedGoodProcustionSheet from './views/FinishedGoodProcustionSheet/Index';
import FinishedGoodProcustionSheetView from './views/FinishedGoodProcustionSheet/View';
import ListFinishedGoodProcustionSheet from './views/FinishedGoodProcustionSheet/List';

import LoadingOrder from './views/LoadingOrder/Index';
import LoadingOrderView from './views/LoadingOrder/View';
import ListLoadingOrder from './views/LoadingOrder/List';

import KandaParchi from './views/KandaParchi/Index';
import KandaParchiView from './views/KandaParchi/View';
import ListKandaParchi from './views/KandaParchi/List';
import Payment from './views/Payment/Index';
import PaymentView from './views/Payment/View';
import ListPayment from './views/Payment/List';
import ProductionLotNumber from './views/ProductionLotNumber/Index';
import ProductionLotNumberView from './views/ProductionLotNumber/View';
import ListProductionLotNumber from './views/ProductionLotNumber/List';
import Purchase from './views/PriceEnquiry/Index';
import PurchaseBill from './views/PurchaseBill/Index';
import PurchaseBillView from './views/PurchaseBill/View';
import ListPurchaseBill from './views/PurchaseBill/List';
import RawMaterialIn from './views/RawMaterialIn/Index';
import RawMaterialInView from './views/RawMaterialIn/View';
import ListRawMaterialIn from './views/RawMaterialIn/List';
import RawMaterialOut from './views/RawMaterialOut/Index';
import RawMaterialOutView from './views/RawMaterialOut/View';
import ListRawMaterialOut from './views/RawMaterialOut/List';
import UnloadingDetail from './views/UnloadingDetail/Index';
import UnloadingDetailView from './views/UnloadingDetail/View';
import ListUnloadingDetail from './views/UnloadingDetail/List';
import Layout from './views/layout/Layout';
import ListSampleLabReport from './views/SampleLabReport/List';
import ViewSampleLabReport from './views/SampleLabReport/View';
import SampleLabReports from './views/SampleLabReport/Index';
import ListGatePassEntry from './views/Gatepass/List';
import ViewGatePassEntry from './views/Gatepass/View';
import GatePassEntry from './views/Gatepass/Index';



import ListPriceEnquiries from './views/Enquires/PriceEnquiries';
const Drawer = createDrawerNavigator();


function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	return (

		<NavigationContainer>
			<Drawer.Navigator screenOptions={{ headerShown: false }}>
				<Drawer.Screen name="AppNavigator" component={AppNavigator} />
				<Drawer.Screen name="Login" component={Login} />
				<Drawer.Screen name="Dashboard" component={Dashboard} />


				<Drawer.Screen name="AnalysisReportLabIncharge" component={AnalysisReportLabIncharge} />
				<Drawer.Screen name="AnalysisReportLabInchargeView" component={AnalysisReportLabInchargeView} />
				<Drawer.Screen name="ListAnalysisReportLabIncharge" component={ListAnalysisReportLabIncharge} />


				<Drawer.Screen name="FinishedGoodIn" component={FinishedGoodIn} />
				<Drawer.Screen name="FinishedGoodInView" component={FinishedGoodInView} />
				<Drawer.Screen name="ListFinishedGoodIn" component={ListFinishedGoodIn} />

				<Drawer.Screen name="FinishedGoodOut" component={FinishedGoodOut} />
				<Drawer.Screen name="FinishedGoodOutView" component={FinishedGoodOutView} />
				<Drawer.Screen name="ListFinishedGoodOut" component={ListFinishedGoodOut} />

				<Drawer.Screen name="FinishedGoodProcustionSheet" component={FinishedGoodProcustionSheet} />
				<Drawer.Screen name="FinishedGoodProcustionSheetView" component={FinishedGoodProcustionSheetView} />
				<Drawer.Screen name="ListFinishedGoodProcustionSheet" component={ListFinishedGoodProcustionSheet} />

				<Drawer.Screen name="LoadingOrder" component={LoadingOrder} />
				<Drawer.Screen name="LoadingOrderView" component={LoadingOrderView} />
				<Drawer.Screen name="ListLoadingOrder" component={ListLoadingOrder} />


				<Drawer.Screen name="KandaParchi" component={KandaParchi} />
				<Drawer.Screen name="KandaParchiView" component={KandaParchiView} />
				<Drawer.Screen name="ListKandaParchi" component={ListKandaParchi} />


				<Drawer.Screen name="Payment" component={Payment} />
				<Drawer.Screen name="PaymentView" component={PaymentView} />
				<Drawer.Screen name="ListPayment" component={ListPayment} />


				<Drawer.Screen name="ProductionLotNumber" component={ProductionLotNumber} />
				<Drawer.Screen name="ProductionLotNumberView" component={ProductionLotNumberView} />
				<Drawer.Screen name="ListProductionLotNumber" component={ListProductionLotNumber} />


				<Drawer.Screen name="Purchase" component={Purchase} />
				<Drawer.Screen name="PriceEnquiryView" component={PriceEnquiryView} />
				<Drawer.Screen name="ListPriceEnquiry" component={ListPriceEnquiry} />


				<Drawer.Screen name="PurchaseBill" component={PurchaseBill} />
				<Drawer.Screen name="PurchaseBillView" component={PurchaseBillView} />
				<Drawer.Screen name="ListPurchaseBill" component={ListPurchaseBill} />


				<Drawer.Screen name="RawMaterialIn" component={RawMaterialIn} />
				<Drawer.Screen name="RawMaterialInView" component={RawMaterialInView} />
				<Drawer.Screen name="ListRawMaterialIn" component={ListRawMaterialIn} />


				<Drawer.Screen name="RawMaterialOut" component={RawMaterialOut} />
				<Drawer.Screen name="RawMaterialOutView" component={RawMaterialOutView} />
				<Drawer.Screen name="ListRawMaterialOut" component={ListRawMaterialOut} />


				<Drawer.Screen name="UnloadingDetail" component={UnloadingDetail} />
				<Drawer.Screen name="UnloadingDetailView" component={UnloadingDetailView} />
				<Drawer.Screen name="ListUnloadingDetail" component={ListUnloadingDetail} />



				<Drawer.Screen name="ListSampleLabReport" component={ListSampleLabReport} />
				<Drawer.Screen name="ViewSampleLabReport" component={ViewSampleLabReport} />
				<Drawer.Screen name="SampleLabReports" component={SampleLabReports} />


				<Drawer.Screen name="ListGatePassEntry" component={ListGatePassEntry} />
				<Drawer.Screen name="ViewGatePassEntry" component={ViewGatePassEntry} />
				<Drawer.Screen name="GatePassEntry" component={GatePassEntry} />

			</Drawer.Navigator>
		</NavigationContainer>
	);
}


export default App;
