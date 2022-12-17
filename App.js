import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Store } from 'redux';

export default function App() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Main />
        </Provider>
      </NavigationContainer>
    )
}