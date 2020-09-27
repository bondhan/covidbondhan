import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import DrawerNavi from './drawerNav';
import DashboardNav from './stackNav';

const Tab = createBottomTabNavigator();

export default function AppTabBottomNav() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Dashboard') {
              iconName = focused ? 'dashboard' : 'dashboard';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={DrawerNavi} />
        <Tab.Screen name="Dashboard" component={DashboardNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
