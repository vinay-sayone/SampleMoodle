import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from './Profile';
import Details from './Details';
import BlogMessages from './BlogMessages';
import Grades from './Grades';
import GradesView from './Grades/View';

const AboutSubcontext = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="blogmessages" component={BlogMessages} />
      <Stack.Screen name="grades" component={Grades} />
      <Stack.Screen name="gradesview" component={GradesView} />
    </Stack.Navigator>
  );
};

export default AboutSubcontext;
