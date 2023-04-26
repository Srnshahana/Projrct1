import AsyncStorage from '@react-native-async-storage/async-storage';
import {CurrentRenderContext} from '@react-navigation/native';
import React, {useState, push, _storeData, _retrieveData} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  FlatList,
  Keyboard,
  StyleSheet,
  Pressable,
  Platform,
  Alert,
  KeyboardAvoidingViewBase,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const array = [];

const bi = {
  uri: 'https://cdn.pixabay.com/photo/2014/12/15/15/36/blue-569222_960_720.jpg',
};
const Props = {
  children: React.ReactNode,
};
const ViewStyleProps = ({navigation}) => {
  const [user, setuser] = useState('');
  const [pass, setpass] = useState('');
  const [val, setVal] = useState();
  const [myarray, setmyarray] = useState([]);
  const [array, setarray] = useState([]);
  const saveValue = async () => {
    try {
      array.push({username: user, password: pass});
      console.log(array);
      const jsonValue = JSON.stringify(array);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (error) {}
  };

  const getvalue = async () => {
    try {
      const uservalue = await AsyncStorage.getItem('user');
      const jsondata = JSON.parse(uservalue);
      setmyarray(jsondata);
      console.log(jsondata, 'hh');
      // const passvalue = await AsyncStorage.getItem('pass');

      // myarray.push(uservalue);
      // console.log(JSON.parse(myarray));

      // const myarray = [...myarray];
      // myarray.push({uservalue});

      // console.log(myarray);
      //     if (uservalue !== null) {
      //       setVal(uservalue);
      //     }
      //     console.log(uservalue);
    } catch (error) {}
  };

  return (
    <KeyboardAvoidingView style={styles.container} isVisible={true}>
      <KeyboardAwareScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
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
                  color: '#ffff',
                  alignSelf: 'center',
                  fontSize: 36,
                  marginBottom: 48,
                  textAlign: 'center',
                }}
              />
              <Text
                style={{
                  color: 'black',
                  alignSelf: 'center',
                  fontFamily: 'italic',
                }}>
                Enter your username
              </Text>
              <TextInput
                style={{
                  height: 40,
                  borderBottomWidth: 1,
                  width: 200,
                  alignSelf: 'center',
                  borderColor: 'black',
                  borderWidth: 2,
                  alignItems: 'center',
                  borderRadius: 20,
                  marginBottom: 20,
                  fontSize: 18,
                }}
                onChangeText={text => {
                  setuser(text);
                }}
              />
              <Text
                style={{
                  color: 'black',
                  alignSelf: 'center',
                  fontFamily: 'italic',
                }}>
                Enter your passsword
              </Text>
              <TextInput
                style={{
                  height: 40,
                  alignSelf: 'center',
                  width: 200,
                  borderColor: 'black',
                  borderWidth: 2,
                  alignItems: 'center',
                  borderRadius: 20,
                  marginBottom: 20,
                  fontSize: 18,
                }}
                keyboardType="numeric"
                // keyboardAppearance="light"
                placeholder="Numeric password"
                maxLength={5}
                onChangeText={text => {
                  setpass(text);
                }}
              />
              {/* <Pressable
        onPress={() => {
          getvalue();
        }}
        style={{
          borderRadius: 20,
          backgroundColor: 'blue',
          height: 40,
          width: 90,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlignVertical: 'center',
            textAlign: 'center',
            alignSelf: 'center',
            color: 'pink',
          }}>
          get value
        </Text>
      </Pressable> */}
              <View />
              {/* <View style={{backgroundColor: 'pink', height: 50}}> */}
              <Pressable
                onPress={() => {
                  saveValue();
                  console.log('user', user);
                  if (user === '' || pass === '') {
                    Alert.alert('Please fill username and passsword');
                  } else {
                    navigation.navigate('watchlist', {username: 'user'});
                  }
                }}
                style={{
                  borderRadius: 20,
                  backgroundColor: '#9fbfdf',
                  height: 40,
                  width: 90,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    alignSelf: 'center',
                    color: 'black',
                  }}>
                  Login
                </Text>
              </Pressable>
              {/* <FlatList
        data={myarray}
        renderItem={({item, index}) => {
          console.log(item, 'item');
          return (
            <View style={{backgroundColor: 'pink', height: 50}}>
              <Text>
                {item.username}
                {item.password}
              </Text>
            </View>
          );
        }}
      /> */}
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  inner: {
    padding: 4,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});
export default ViewStyleProps;
