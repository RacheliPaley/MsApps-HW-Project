
import { Provider } from 'react-redux';
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Gallery from './Components/gallery';

function App() {
  return (
    <Provider store={store}>
      <Gallery />
    </Provider>
  );
}
export default App;
