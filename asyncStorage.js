import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, _storeData, _retrieveData} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const myarray = [];
const ViewStyleProps = () => {
  const [arr, setarr] = useState('');
  const [val, setVal] = useState('');
  // const [value, setvalue] = useState('');

  const saveValue = async () => {
    try {
      console.log(jsonValue);
      // let temp1 = JSON.parse(arr);
      // alert(temp1.arr);
      // arr.push(arr);
      // let temp = [...arr];
      // temp.push(arr);
      const jsonValue = JSON.stringify(arr);
      console.log(jsonValue);
      setarr(jsonValue);

      await AsyncStorage.setItem('user', jsonValue);
      myarray.push(jsonValue);
      // console.log(arr);
      console.log('saved', myarray);
    } catch (error) {}
  };
  const getvalue = async () => {
    try {
      const value = await AsyncStorage.getItem(JSON.parse(myarray));

      console.log(value, 'valuur');

      if (value !== null) {
        setVal(value);

        console.log(val, 'valuur');
      }
    } catch (error) {}
  };
  console.log(myarray);
  return (
    <View>
      <Text style={{color: '#ffff', fontSize: 30, textAlign: 'center'}}>
        LOGIN
      </Text>
      <Text style={{color: 'black', fontFamily: 'italic'}}>USER NAME</Text>
      <TextInput
        style={{
          height: 40,
          width: '95%',
          borderColor: 'black',
          borderWidth: 2,
          alignItems: 'center',
          borderRadius: 20,
          marginBottom: 20,
          fontSize: 18,
        }}
        value={arr.userame}
        onChangeText={data => setarr(data)}
      />
      <TextInput
        style={{
          height: 40,
          width: '95%',
          borderColor: 'black',
          borderWidth: 2,
          alignItems: 'center',
          borderRadius: 20,
          marginBottom: 20,
          fontSize: 18,
        }}
        onChangeText={data => setarr(data)}
      />
      <Pressable
        onPress={() => {
          saveValue();
          console.log('saved', arr);
          // alert('saved');
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
          save
        </Text>
      </Pressable>
      <Pressable
        //  onPress={() => {
        //   setarr();
        //   console.log('saved', arr);

        onPress={() => getvalue()}
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
      </Pressable>
      <Text>the value is</Text>
      <Text>.................</Text>

      <SafeAreaView>
        <FlatList
          data={myarray}
          renderItem={({item}) => {
            return (
              <View style={{backgroundColor: '#ffff', height: 50}}>
                <Text>
                  username
                  {item.userame}
                  password
                  {item.password}
                </Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};
export default ViewStyleProps;
