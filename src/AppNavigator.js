import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screen/Splash';
import Main from './Main';
import Login from './screen/Login';
import Signup from './screen/Signup';
import ProductDetail from './screen/ProductDetail';
import Bag from './HomeScreenTab/Bag';
import OrderPlaced from './screen/OrderPlaced';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Splash} name="Splash" options={{headerShown: false}} /> 
        <Stack.Screen component={Login} name="Login" options={{headerShown: false}} /> 
        <Stack.Screen component={Signup} name="Signup" options={{headerShown: false}} /> 
        <Stack.Screen component={ProductDetail} name="ProductDetail" options={{headerShown: false}} /> 
        <Stack.Screen component={Bag} name="Bag" options={{headerShown: false}} /> 
        <Stack.Screen component={Main} name="Main" options={{headerShown: false}} /> 
        <Stack.Screen component={OrderPlaced} name="OrderPlaced" options={{headerShown: false}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator