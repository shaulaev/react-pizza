import './Nullifying.css';
import './App.css';
import { MainPage } from './components/Main/MainPage';
import {Routes, Route} from "react-router-dom"
import React, { Suspense } from 'react';

function App() {

  const CartPage = React.lazy(() => import('./components/Cart/CartPage')) 

  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />}/>
            <Route path='/cart' element={<CartPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
