import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginUI from './components/LoginUI';
import Main from './components/Main';
import BottomMain from './components/BottomMain';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Bottom' component={BottomMain} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;