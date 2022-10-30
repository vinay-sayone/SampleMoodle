import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';

const AuthContext = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="login" headerMode="none">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthContext;
