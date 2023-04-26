import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const logo = {
  uri: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg',
};
const ViewStyleProps = () => {
  const [Name, setName] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
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
        onChangeText={text => {
          console.log(text);
          setName(text);
        }}
      />
      <Text style={{color: 'black', fontFamily: 'italic'}}> password</Text>
      <TextInput
        accessibilityLabel="input"
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
        onChangeText={text => {
          console.log(pass);
          setPass(text);
        }}
      />
      <Text>your name is {Name}</Text>
      <Text>your pass is {pass}</Text>
      <Pressable
        onPress={() => Alert.alert(' succesfully submitted')}
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
          submit
        </Text>
      </Pressable>
      <Pressable
        onPress={() => [setName(' '), setPass('')]}
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
          clear
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,

    backgroundColor: 'gray',
    padding: 20,
    margin: 10,
  },
});

export default ViewStyleProps;
//   top: {
//     flex: 0.3,
//     backgroundColor: 'grey',
//     borderWidth: 5,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   middle: {
//     flex: 0.3,
//     backgroundColor: 'black',
//     borderWidth: 5,
//   },
//   bottom: {
//     flex: 0.3,
//     backgroundColor: 'pink',
//     borderWidth: 5,
//   },
//   bb: {
//     flex: 0.3,
//     backgroundColor: 'gray',
//     borderWidth: 5,

//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
