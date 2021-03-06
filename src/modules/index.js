import React from 'react'
import {View, Text, SafeAreaView, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Screen1 from './screen1'

import Splash from './screens/splash'
import Home from './screens/home'
import Profile from './screens/profile'
import Games from './screens/games/index'

import InitialScreen from './screens/initialScreen'
import SignIn from './screens/signIn'
import SetUpRouter from './screens/setupNavigation'
import NewHot from './screens/new&hot'
import VideoScreen from './screens/videoPlayer'
import Downloads from './screens/downloads'
import FastLaugh from './screens/fastlaughs'
import MyList from './screens/myList'
import SearchScreen from './screens/search'
import InfoScreen from './screens/home/info'
import EnterEmail from './screens/setupNavigation/Screen/enterEmail'
import SetUp from './screens/setupNavigation/Screen/setUp'


const Tab = createNativeStackNavigator()
const Router = ()=>{
    
    return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name ='Splash' component={Splash} />
            <Tab.Screen name ='Screen1' component={Screen1}/>
            <Tab.Screen name='Initial Screen' component={InitialScreen}/>
            <Tab.Screen name= 'Profile' component={Profile}/>
            <Tab.Screen name='Sign In' component={SignIn}/>
            <Tab.Screen name='SetUpRouter' component={SetUpRouter}/>
            <Tab.Screen name ='MyList' component={MyList}/>
            <Tab.Screen name='SetUp' component={SetUp}/>
           
            <Tab.Screen name = 'SearchScreen' component={SearchScreen}/>
            <Tab.Screen name = 'InfoScreen' component={InfoScreen}/>
        </Tab.Navigator>

    </NavigationContainer>
    )

}



export default Router

const Styles = StyleSheet.create(
    {
        netflixImage:{
            height:40,
            width:40,
            resizeMode:'contain'
        },
        searchImage:{
            height:30,
            width:30,
            resizeMode:'contain',
            right:'15%',
            position:'absolute',

        },
        profileImage:{
            
            height:30,
            width:30,
            resizeMode:'contain',
            right:5,
            position:'absolute',
            borderRadius:5
        },

        HomeTopView:{
            flexDirection:'row'
        }
    }
)


