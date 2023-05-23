import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const Complete = () => {
  const {isDarkMode, toggleTheme, theme} = useContext(ThemeContext);

  return (
    <View>
      <Text style={[styles.textHead, {color: theme.textColor}]}>Completed</Text>
    </View>
  );
};

export default Complete;

const styles = StyleSheet.create({
  textHead: {
    fontWeight: '700',
    fontSize: 18,
    paddingBottom: 16,
  },
});
