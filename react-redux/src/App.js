import './App.css'

import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import HooksIceCreamContainer from './components/HooksIceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <ItemContainer cake />
        <ItemContainer iceCream />
        {/* <NewCakeContainer /> */}
        {/* <HooksCakeContainer /> */}
        {/* <CakeContainer /> */}
        {/* <HooksIceCreamContainer /> */}
        {/* <IceCreamContainer /> */}
      </div>
    </Provider>
  );
}

export default App
