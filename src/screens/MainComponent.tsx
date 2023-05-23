import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {Divider, Switch} from 'react-native-paper';
import moment from 'moment';
import Incomplete from '../components/Incomplete';
import Complete from '../components/Complete';

const SomeComponent: React.FC = () => {
  const {isDarkMode, toggleTheme, theme} = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [taskInput, setTaskInput] = useState('');

  const onToggleSwitch = () => {
    toggleTheme();
  };
  const currentDate = moment().format('MMMM D, YYYY');

  const handleAddTask = () => {
    // Handle adding the task
    console.log('New task:', taskInput);
    setModalVisible(false);
    setTaskInput('');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.backgroundColor}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.backgroundColor}
      />
      <View style={styles.mainConatiner}>
        <View style={styles.headerStyle}>
          <View>
            <Text style={[styles.textHeader, {color: theme.textColor}]}>
              {currentDate}
            </Text>
          </View>
          <TouchableOpacity onPress={toggleTheme}>
            <Switch value={isDarkMode} onValueChange={onToggleSwitch} />
          </TouchableOpacity>
        </View>
        <Text style={styles.statusText}>5 incomplete, 5 completed</Text>
        <Divider style={styles.dividerStyle} />
        <Incomplete />
        <Complete />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={require('../assets/addTaskIcon.png')} />
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add Task</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter task"
              value={taskInput}
              onChangeText={text => setTaskInput(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
              <Text style={styles.addButtonLabel}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonLabel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default SomeComponent;

const styles = StyleSheet.create({
  mainConatiner: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontSize: 32,
    fontWeight: '700',
  },
  statusText: {
    paddingVertical: 8,
    color: '#575767',
  },
  dividerStyle: {
    paddingTop: 1,
    marginTop: 8,
    marginBottom: 16,
    color: '#575767',
    opacity: 0.2,
  },
});
