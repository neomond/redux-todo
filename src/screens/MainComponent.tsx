import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {Divider, Switch} from 'react-native-paper';
import moment from 'moment';
import Incomplete from '../components/Incomplete';
import Complete from '../components/Complete';
import TaskModal from '../components/Modal';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/actions/actions';

const SomeComponent: React.FC = () => {
  const {isDarkMode, toggleTheme, theme} = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [taskInput, setTaskInput] = useState('');

  let dispatch = useDispatch();

  const handleAddTask = (task: string) => {
    // console.log('New task:', task);
    dispatch(
      addTodo({
        id: Math.floor(Math.random() * 1000),
        title: task,
        completed: false,
      }),
    );
    setModalVisible(false);
    setTaskInput('');
  };

  const closeModal = () => {
    setModalVisible(false);
    setTaskInput('');
  };
  const onToggleSwitch = () => {
    toggleTheme();
  };
  const currentDate = moment().format('MMMM D, YYYY');

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
        <TouchableOpacity
          style={styles.plusIcon}
          onPress={() => setModalVisible(true)}>
          <Image source={require('../assets/addTaskIcon.png')} />
        </TouchableOpacity>
        <TaskModal
          visible={modalVisible}
          onClose={closeModal}
          onAddTask={handleAddTask}
        />
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
  plusIcon: {
    position: 'absolute',
    top: '235%',
    left: '85%',
  },
});
