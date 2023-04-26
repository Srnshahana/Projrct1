import React from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Blink from './bb';

import {Colors} from 'react-native/Libraries/NewAppScreen';
const bi = {
  uri: 'https://cdn.pixabay.com/photo/2014/12/15/15/36/blue-569222_960_720.jpg',
};
const logo = {
  uri: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg',
};
// const MyIcon1 = () => {
//   return <Icon name="rocket" size={30} color="black" />;
// };
const Add = () => {
  return (
    <View contentContainerStyle={styles.container}>
      <ImageBackground
        source={bi}
        resizeMode="cover"
        style={{
          height: 500,
          width: 300,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'verdana',
            marginBottom: 10,
            color: 'black',
            marginStart: 5,
            fontSize: 17,
          }}>
          Movie Name
        </Text>

        <TextInput
          style={{
            height: 40,
            // margintop: 10,
            width: 200,
            borderColor: 'black',
            borderWidth: 2,
            alignSelf: 'flex-start',
            alignItems: 'flex-start',
            borderRadius: 20,
            // marginBottom: 10,
            fontSize: 18,
            marginLeft: '20%',
          }}
          onChangeText={text => {
            // setpass(text);
          }}
        />
        <Text
          style={{
            marginStart: 5,
            fontFamily: 'verdana',
            marginBottom: 10,
            color: 'black',
            fontSize: 17,
          }}>
          genre
        </Text>
        <TextInput
          style={{
            height: 40,

            width: 200,
            borderColor: 'black',
            borderWidth: 2,
            // alignItems: 'center',
            alignSelf: 'flex-start',
            borderRadius: 20,
            marginBottom: 300,
            marginHorizontal: 2,
            marginLeft: '20%',
            fontSize: 18,
          }}
          onChangeText={text => {
            // setpass(text);
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    padding: 20,
    margin: 10,
  },
  top: {
    fontFamily: 'italien',
    fontWeight: '100',
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

export default Add;
