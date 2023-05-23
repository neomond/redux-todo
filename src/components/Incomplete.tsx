import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import {Checkbox} from 'react-native-paper';

const Incomplete = () => {
  const {isDarkMode, toggleTheme, theme} = useContext(ThemeContext);

  return (
    <View>
      <Text style={[styles.textHead, {color: theme.textColor}]}>
        Incompleted
      </Text>
    </View>
  );
};

export default Incomplete;

const styles = StyleSheet.create({
  textHead: {
    fontWeight: '700',
    fontSize: 18,
    paddingBottom: 16,
  },
});
