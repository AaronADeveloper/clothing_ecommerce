import React from 'react';
import Homepage from './pages/Homepage'
import '../src/App.css'
import {Switch, Route} from 'react-router-dom';
import ShopPage from '../src/pages/shop/shopPage'


function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      
    </Switch>  
    </div>
  );
}

export default App;
