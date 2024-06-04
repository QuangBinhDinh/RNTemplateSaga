import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { memo } from 'react';
import BottomTabs from './AppNavigator';
import { navigationRef } from './service';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import ProductDetailScreen from '../module/product';
import LoadingSpinner from '@components/loading/LoadingSpinner';
import BottomMessage from '@components/popup/BottomMessage';
const Stack = createSharedElementStackNavigator();

const Router = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <LoadingSpinner />
            <BottomMessage />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="App" component={BottomTabs} options={{ animationEnabled: false }} />

                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
