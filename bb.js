import React, {useState, useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
const Blink = props => {
  return (
    <View>
      <Pressable
        onPress={() => alert(' succesfully submitted')}
        style={{
          borderRadius: 20,
          backgroundColor: '#ffff',
          alignSelf: 'center',
          height: 10,
          width: 10,
          color: '#ffff',
        }}
      />
    </View>
  );
};

export default Blink;
