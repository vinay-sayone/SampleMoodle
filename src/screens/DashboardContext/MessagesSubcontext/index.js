import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import View from './View';
import Settings from './Settings';

const MessagesSubcontext = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="view" component={View} />
      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default MessagesSubcontext;
