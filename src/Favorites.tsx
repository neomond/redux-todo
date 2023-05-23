// import {Pressable, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {RootState} from '../App';

// const Favorites = () => {
//   let favorites = useSelector<RootState, any>(state => state);

//   let dispatch = useDispatch();
//   function handledelete(item: any) {
//     dispatch({type: 'DELETE', payload: item});
//   }
//   return (
//     <View>
//       <Text>Favorites:</Text>
//       {favorites.map((favorite: any) => (
//         <View key={favorite.id}>
//           <Text>{favorite.name}</Text>
//           <Pressable onPress={() => handledelete(favorite)}>
//             <Text>Delete</Text>
//           </Pressable>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default Favorites;

// const styles = StyleSheet.create({});
