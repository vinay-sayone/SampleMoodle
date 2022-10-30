import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import View from './View';

const CourseContext = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="view" component={View} />
    </Stack.Navigator>
  );
};

export default CourseContext;
