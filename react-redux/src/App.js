import './App.css'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import HooksIceCreamContainer from './components/HooksIceCreamContainer'

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <HooksIceCreamContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App
