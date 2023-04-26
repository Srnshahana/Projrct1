import React from 'react';
import {View, Button, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <Button
      title="Go to Jane's profile"
      // onPress={() => navigation.navigate('ProfileScreen')}
    />
  );
};
const ProfileScreen = () => {
  return <Text>This is 's profile</Text>;
};
export default HomeScreen;
