// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import {useDispatch} from 'react-redux';
// const categories = [
//   {name: 'category1', id: 1},
//   {name: 'category2', id: 2},
//   {name: 'category3', id: 3},
//   {name: 'category4', id: 4},
// ];
// const CategoryList = () => {
//   let dispatch = useDispatch();
//   const handleCategoryPress = (category: any) => {
//     let newcat = {
//       name: category.name,
//       id: category.name,
//     };
//     dispatch({type: 'ADD', payload: newcat});
//   };
//   return (
//     <View>
//       <Text>Category List:</Text>
//       {categories.map((category: any) => (
//         <TouchableOpacity
//           key={category.id}
//           onPress={() => handleCategoryPress(category)}>
//           <Text>{category.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// export default CategoryList;

// const styles = StyleSheet.create({});
