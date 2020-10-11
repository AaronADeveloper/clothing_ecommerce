import React from 'react';
import Homepage from './pages/Homepage'
import '../src/App.css'
import {Switch, Route} from 'react-router-dom';
import ShopPage from '../src/pages/shop/shopPage'
import Header from '../src/components/header/header'
import SignInAndSignUpPage from '../src/components/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth} from './firebase/firebase-utils'


export class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
       <Route path='/shop' component={ShopPage} />
       <Route path='/signin' component={SignInAndSignUpPage} />  
    </Switch>  
  </div>
      
    )
  }
}

export default App;
