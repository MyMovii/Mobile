import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Login from './pages/Login';
import Recommendations from './pages/Recomendations/index'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="recommendations" component={Recommendations} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}