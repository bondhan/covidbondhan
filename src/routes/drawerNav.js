import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import About from '../screens/about';
import Home from '../screens/home';
import Settings from '../screens/settings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={() => {
          navigation.openDrawer();
        }}
        // style={styles.icon}
      />
      {/* <Image source={require('./assets/images/icons/drawer.png')} /> */}
    </View>
  );
};

function HomeStackNavi() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Home',
            headerLeft: ({}) => <HeaderLeft />,
          }}
          component={Home}
          name="Home"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AboutStackNavi() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'About',
            headerLeft: ({}) => <HeaderLeft />,
          }}
          component={About}
          name="About"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function SettingsStackNavi() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Settings',
            headerLeft: ({}) => <HeaderLeft />,
          }}
          component={Settings}
          name="About"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function HomeDrawer() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackNavi} />
        <Drawer.Screen name="About" component={AboutStackNavi} />
        <Drawer.Screen name="Settings" component={SettingsStackNavi} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
