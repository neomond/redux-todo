import {Provider} from 'react-redux';
import {ThemeProvider} from './src/context/ThemeContext';
import MainComponent from './src/screens/MainComponent';
// import {createStore} from 'redux';
// import {CategoryReducer} from './src/redux/reducers/СategoryReducer';

// let store = createStore(CategoryReducer);

// export type RootState = ReturnType<typeof store.getState>;

const App = () => {
  // console.log(typeof store.getState);

  return (
    // <Provider store={store}>
    <ThemeProvider>
      <MainComponent />
    </ThemeProvider>

    // </Provider>
  );
};

export default App;
