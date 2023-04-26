import * as React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {
  Button,
  ImageBackground,
  Pressable,
  navigation,
  Image,
  navigate,
  TabBarIcon,
  Alert,
  Text,
  MaterialCommunityIcons,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import add from './addmovie';
import App from './API fetch';
const MyIcon1 = () => {
  return <Icon name="television" size={30} color="black" />;
};
const MyIcon2 = () => {
  return <Icon name="plus-circle" size={32} color="black" />;
};
const MyIcon3 = () => {
  return <Icon1 name="indent-right" size={30} color="black" />;
};
// const MyIcon = (
//   <Icon
//     name="movie-open-edit"
//     size={30}
//     color="black
// "
//   />
// );
const bi = {
  uri: 'https://cdn.pixabay.com/photo/2014/12/15/15/36/blue-569222_960_720.jpg',
};

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground
        source={bi}
        resizeMode="cover"
        style={{
          height: 500,
          width: 300,
          justifyContent: 'center',
        }}
      />
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const Num = ({Navigation}) => {
  const route = useRoute();
  const id = route.params?.username;
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="your watch list"
        component={HomeScreen}
        // tabBarIcon: ({color, size}) => <Tabicon />,
        options={{
          tabBarIcon: () => <MyIcon1 />,
        }}
      />

      <Tab.Screen
        name="add movie"
        component={add}
        options={{
          tabBarIcon: () => <MyIcon2 />,
          tabBarStyle: {display: 'none'},
        }}
      />

      <Tab.Screen
        name="recomentaions"
        component={App}
        options={{
          tabBarIcon: () => <MyIcon3 />,
        }}
      />
    </Tab.Navigator>
  );
};
export default Num;
