// In App.js in a new project

import * as React from 'react';
import {
  View,
  AsyncStorage,
  useState,
  FlatList,
  TextInput,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  navigation,
  Text,
} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
// import 'react-native-gesture-handler';
import ViewStyleProps from './asyncArray';
import Add from './addmovie';
import temmp from './temp';
import TextScreen from './data';
import BottomTab from './Bottomtab';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {template} from '@babel/core';
const logo = {
  uri: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg',
};
const bi = {
  uri: 'https://cdn.pixabay.com/photo/2014/12/15/15/36/blue-569222_960_720.jpg',
};
const arr = [];
function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      {/* <Pressable
          onPress={() => navigation.navigate('cccc')}
          style={{
            borderRadius: 20,
            backgroundColor: 'gray',
            height: 40,
            width: 90,
            alignSelf: 'center',
          }}> */}
    </View>
  );
}

function Drawescreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground source={bi} resizeMode="cover" style={styles.image}>
        <Image
          accessible={true}
          source={logo}
          style={{
            width: 100,
            height: 100,
            alignItems: 'center',
            borderRadius: 400 / 2,
            alignSelf: 'center',
          }}
        />

        <Pressable
          onPress={() => navigation.navigate('Login')}
          style={{
            borderRadius: 20,
            backgroundColor: '#9fbfdf',
            height: 40,
            width: 90,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              color: 'black',
            }}>
            Login
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function HomeScreen({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="application">
      <Drawer.Screen name="application" component={Drawescreen} />
      <Drawer.Screen name="Notifications" component={DetailsScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home screen" component={HomeScreen} />
        <Stack.Screen name="Login page" component={DetailsScreen} />
        <Stack.Screen name="Login" component={ViewStyleProps} />
        <Stack.Screen name="watchlist" component={BottomTab} />
        <Stack.Screen name="bottom" component={TextScreen} />
        <Stack.Screen name="addwatchlist" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 500,
    width: 300,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;
