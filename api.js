import {useEffect, useState} from 'react';
import {requireNativeComponent} from 'react-native';
import {createConnection} from './chat.js';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const ChatRoom = () => {
  const [count, setcount] = useState(1);

  useEffect(() => {
    // setTimeout(() => alert('count changed'), 500);
    console.log('jjjj');
  }, []);

  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center'}}>{count + 1}</Text>
      <Pressable
        onPress={() => {
          console.log('........');
          setcount(count + 1);
        }}
        style={{
          borderRadius: 20,
          backgroundColor: 'black',
          height: 40,
          width: 90,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: '#ffff',
            alignSelf: 'center',
          }}>
          count
        </Text>
      </Pressable>
    </View>
  );
};
export default ChatRoom;
