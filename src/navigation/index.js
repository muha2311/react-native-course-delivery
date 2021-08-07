import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen,RepoScreen } from '../screens';

const {Screen,Navigator}=createNativeStackNavigator();

const RootNavigator=()=>{
    return(
    <NavigationContainer>
        <Navigator screenOptions={{header:()=>null,contentStyle:{backgroundColor:"white"}}}>
            <Screen name={"Home"} component={HomeScreen}></Screen>
            <Screen name={"Repo"} component={RepoScreen}></Screen>
        </Navigator>
    </NavigationContainer>
    )
}

export default RootNavigator;