import {Provider} from 'react-redux';
import {ThemeProvider} from './src/context/ThemeContext';
import MainComponent from './src/screens/MainComponent';
import {TodoReducer} from './src/redux/reducers/TodoReducer';
import {createStore} from 'redux';

let store = createStore(TodoReducer);

export type RootState = ReturnType<typeof store.getState>;

const App = () => {
  console.log(typeof store.getState);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainComponent />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
