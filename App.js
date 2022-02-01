import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReadQr from './screens/ReadQr';
import QrList from './screens/QrList';
import store from "./store/index.js"
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'ReadQr') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'QrList') {
              iconName = focused ? 'list' : 'ios-list';
            }

          
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="ReadQr" component={ReadQr} />
        <Tab.Screen name="QrList" component={QrList} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}