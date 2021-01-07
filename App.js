import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/layout/Home';
import Game from './src/layout/Game';
import Level from './src/layout/Level';

const Stack = createStackNavigator();

export default function App() {
  const s = (title) => {
    return {
      title: '',
      headerTransparent: true,
      headerTitleAlign: 'center',
      headerTitleStyle: { fontWeight: 'bold', fontSize: 44, color: '#ffb26a' },
      headerTintColor: '#0B4BB1'
    };
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={s('Welcome')} />
        <Stack.Screen
          name='Game'
          component={Game}
          options={s('Memory')} />
        <Stack.Screen
          name='Level'
          component={Level}
          options={s('Level')} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
