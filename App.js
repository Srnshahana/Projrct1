import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './home';
import app from './array';
// import App from './temp';
import ChatRoom from './api';
// import App from './API fetch';
import App from './navigate data';
import num from './Bottomtab';
import Drawer from './drawer';
import cat from './state';
export default App;
// export default cat;
// export default List;

//
//
//
//
//
//
//
// const MyStack = () =>
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Welcome'}}
//           root
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default MyStack;import React, {Component} from 'react';
// import React, {Component} from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   AsyncStorage,
//   Pressable,
// } from 'react-native';

// class App extends Component<Props> {
//   saveData() {
//     /*let user = "Michal";*/
//     let obj = {
//       name: 'Michal',
//       email: 'michal@gmail.com',
//       city: 'New York',
//     };
//     /*AsyncStorage.setItem('user',user);*/
//     AsyncStorage.setItem('user', JSON.stringify(obj));
//   }
//   displayData = async () => {
//     try {
//       let user = await AsyncStorage.getItem('user');
//       let parsed = JSON.parse(user);
//       alert(parsed.email);
//     } catch (error) {
//       alert(error);
//     }
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Pressable onPress={this.saveData}>
//           <Text>Click to save data</Text>
//         </Pressable>
//         <TouchableOpacity onPress={this.displayData}>
//           <Text>Click to display data</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });
//   );
// };
