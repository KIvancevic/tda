import './global.css';
import ItemsList from './pages/ItemsList';
import { Route, Routes } from 'react-router'
import Liked from './pages/Liked';
import Header from './components/header';
import reducer, { initialState } from './reducer/reducer';
import { StateProvider } from './stateProvider/stateProvider';

function App() {
  const data = localStorage.getItem('likedItems')
  const parsedData = JSON.parse(data)

  return (
    
    <div className='App'>
      <StateProvider initialState={{ likedBasket:  parsedData } || initialState} reducer={reducer}>
        <Routes>
          <Route strict exact path="/" element={[ <Header />, <ItemsList />]} />
          <Route strict exact path="/liked" element={[ <Header />, <Liked/>]} />
        </Routes>
      </StateProvider>
    </div>
  );
}

export default App;
