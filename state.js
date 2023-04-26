import React, {useState} from 'react';
import {Button, Text, View, Pressable} from 'react-native';

const Cat = props => {
  const [isStudent, setisStudent] = useState(true);
  const [count, setcount] = useState(1);

  return (
    <View>
      <Text>I am {props.qualification}</Text>
      <Text>{count + 1}</Text>
      <Button title={isStudent ? 'study well' : 'work well!'} />
      <Pressable
        onPress={() => {
          setcount(count + 1);
        }}
        style={{
          borderRadius: 20,
          backgroundColor: 'gray',
          height: 40,
          width: 90,
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat qualification="studying" />
    </>
  );
};

export default Cafe;
