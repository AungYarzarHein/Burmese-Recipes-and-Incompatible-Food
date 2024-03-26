import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import FoodList from '../screens/FoodList';
import FoodDetails from '../screens/FoodDetails';
import IncompatibleFood from '../screens/IncompatibleFood';

const Stack = createNativeStackNavigator() ;


const MainRoute = () => {
  return (
   <NavigationContainer >
    <Stack.Navigator 
    screenOptions={{
      headerShown:false,
      animation:"fade",
      animationTypeForReplace:"push",
      presentation:"transparentModal"
    }}
    >
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='foodlist' component={FoodList} />
        <Stack.Screen name='fooddetails' component={FoodDetails} />
        <Stack.Screen name='incomfood'component={IncompatibleFood} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainRoute