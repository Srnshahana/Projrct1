import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Cat = props => {
  const [isStudent, setisStudent] = useState(true);

  return (
    <View>
      <Text>I am {props.qualification}</Text>

      <Button
        onPress={() => {}}
        title={isStudent ? 'study well' : 'work well!'}
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
