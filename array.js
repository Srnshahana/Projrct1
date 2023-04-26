import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    no: '1',
    name: 'sherin',
    password: '123',
  },
  {
    no: '2',
    name: 'ayisha',
    password: '234',
  },
  {
    no: '1',
    name: 'gouri',
    password: '456',
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          console.log(item, 'item');
          return (
            <View style={{backgroundColor: '#ffff', height: 50}}>
              <Text>
                {item.name}, {item.password}
              </Text>
            </View>
          );
        }}
        keyExtractor={item => item.no}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
