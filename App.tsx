import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import MessagesScreen from './screens/MessagesScreen';

type RootStackParamList = {
    Home: undefined;
    Messages: { category: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Categories' }}
                />
                <Stack.Screen
                    name="Messages"
                    component={MessagesScreen}
                    options={({ route }) => ({ title: route.params.category })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
