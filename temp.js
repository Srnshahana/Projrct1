// In App.js in a new project
import {useEffect} from 'react';
import * as React from 'react';
import {
  View,
  AsyncStorage,
  useState,
  FlatList,
  TextInput,
  Image,
  Pressable,
  navigation,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ViewStyleProps from './asyncArray';

const logo = {
  uri: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg',
};
const DetailsScreen = ({navigation}) => {
  useEffect(() => {
    const a = setTimeout(() => navigation.navigate('Homescreen'), 2000);
    // setTimeout(() => alert('yes'), 5000);
    console.log('jjjj');
  }, []);
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
};
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
        onPress={() => navigation.navigate('Login page')}
        style={{
          borderRadius: 20,
          backgroundColor: 'gray',
          height: 40,
          width: 90,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
          }}>
          Login
        </Text>
      </Pressable>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const temmp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homescreen" component={HomeScreen} />
        <Stack.Screen name="Login page" component={DetailsScreen} />
        <Stack.Screen name="cccc" component={ViewStyleProps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default temmp;
