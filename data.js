import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  Text,
  StyleSheet,
  navigation,
  Pressable,
  Alert,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';

import App from './Bottomtab';
import Blink from './bb';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationHelpersContext} from '@react-navigation/native';

const logo = {
  uri: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg',
};

const bi = {
  uri: 'https://cdn.pixabay.com/photo/2014/12/15/15/36/blue-569222_960_720.jpg',
};
const TextScreen = ({navigation}) => {
  const [pass, setpass] = useState();
  const [val, setVal] = useState();
  const [myarray, setmyarray] = useState([]);
  const getvalue = async () => {
    try {
      const uservalue = await AsyncStorage.getItem('user');
      const jsondata = JSON.parse(uservalue);
      setmyarray(jsondata);
      console.log(jsondata, 'hh');
    } catch (error) {}
  };

  return (
    <View>
      <ImageBackground
        source={bi}
        resizeMode="cover"
        style={{
          height: 500,
          width: 300,
          justifyContent: 'center',
        }}>
        <Text>enter the movie you want to watch later</Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            alignSelf: 'center',
            borderColor: 'black',
            borderWidth: 2,
            alignItems: 'center',
            borderRadius: 20,
            marginBottom: 20,
            fontSize: 18,
          }}
          // onChangeText={text => {
          //   setuser(text);
          // }}
        />
        <Pressable
          onPress={() => {
            // getvalue();
            navigation.navigate('bottom');
          }}
          style={{
            height: 40,
            width: '95%',
            borderColor: 'black',
            borderWidth: 2,
            alignItems: 'center',
            borderRadius: 20,
            marginBottom: 20,
            fontSize: 18,
          }}>
          <Text>click</Text>
        </Pressable>
        {/* <FlatList
        data={myarray}
        renderItem={({item, index}) => {
          console.log(item, 'item');
          return (
            <View style={{backgroundColor: 'pink', height: 50}}>
              <Text>
                username
                {item.username}
                password{item.password}
              </Text>
            </View>
          );
        }}
      /> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffff',
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: 'black',
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
  },
  bb: {
    flex: 0.3,
    backgroundColor: 'gray',
    borderWidth: 5,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default TextScreen;
