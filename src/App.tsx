import './Nullifying.css';
import './App.css';
import { MainPage } from './components/Main/MainPage';
import { CartPage } from './components/Cart/CartPage';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/cart' element={<CartPage />}/>
      </Routes>
    </div>
  );
}

export default App;
