import React from 'react';
import Homepage from './pages/Homepage'
import '../src/App.css'
import {Switch, Route} from 'react-router-dom';
import ShopPage from '../src/pages/shop/shopPage'
import Header from '../src/components/header/header'
import SignInAndSignUpPage from '../src/components/sign-in-and-sign-up/sign-in-and-sign-up';


function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
      
    </Switch>  
    </div>
  );
}

export default App;
