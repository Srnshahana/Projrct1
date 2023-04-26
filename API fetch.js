import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Text,
  View,
} from 'react-native';
const bi = {
  uri: 'https://cdn.pixabay.com/photo/2014/12/15/15/36/blue-569222_960_720.jpg',
};
const App = () => {
  const [data, setData] = useState([]);
  const [arr, setarr] = useState([]);

  const getMovies = async () => {
    const response = await fetch('https://reactnative.dev/movies.json');
    // console.log(response);
    const json = await response.json();
    setData(json);
    console.log(json.title);
    console.log(arr);
    // setarr(JSON.parse(data));
    // console.log(arr);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    // <View style={{flex: 1, padding: 24}}>
    <ImageBackground
      source={bi}
      resizeMode="cover"
      style={{
        height: '120%',
        width: '100%',
        justifyContent: 'center',
      }}>
      <Text> </Text>
      {/* <Text
        style={{
          fontSize: 20,
          textAlignVertical: 'center',
          textAlign: 'center',

          color: 'pink',
        }}>
        TITLE OF THE PAGE
      </Text>
      <Text style={{alignSelf: 'center'}}>{data.title}</Text>
      <Text
        style={{
          fontSize: 20,
          textAlignVertical: 'center',
          textAlign: 'center',
          color: 'pink',
        }}>
        DESCRIPTION OF THE PAGE
      </Text>
      <Text style={{alignSelf: 'center', fontSize: 20}}>
        {data.description} */}
      {/* </Text> */}

      <FlatList
        data={data.movies}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#9fbfdf',
              justifyContent: 'space-between',
              borderWidth: 2,
              borderColor: '#ffff',
              alignSelf: 'center',
              width: 300,
              height: 100,
            }}>
            <Text style={{color: 'black'}}>
              {item.title} released on
              {item.releaseYear}
              {data.description}
              <Text> </Text>
              <Text> </Text>
              <Text> </Text>
              <Text> </Text>
            </Text>
          </View>
        )}
      />
    </ImageBackground>
    // </View>
  );
};

export default App;
