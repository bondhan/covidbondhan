import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../screens/dashboard';
import DashboardDetails from '../screens/dashboardDetails';

const Drawer = createStackNavigator();

export default function DashboardNav() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Dashboard Details" component={DashboardDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
