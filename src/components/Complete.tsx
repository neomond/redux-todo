import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import Checkbox from './CheckBox';

const Complete = () => {
  const {isDarkMode, toggleTheme, theme} = useContext(ThemeContext);

  return (
    <ScrollView>
      <Text style={[styles.textHead, {color: theme.textColor}]}>Completed</Text>
      <View style={styles.checkBoxWrapper}>
        <Checkbox />
        <Text style={[styles.textItem, {color: theme.textColor}]}>
          Upload 1099-R to TurboTax
        </Text>
      </View>
    </ScrollView>
  );
};

export default Complete;

const styles = StyleSheet.create({
  textHead: {
    fontWeight: '700',
    fontSize: 18,
    paddingBottom: 12,
  },
  textItem: {
    fontWeight: '500',
    fontSize: 16,
  },
  checkBoxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
