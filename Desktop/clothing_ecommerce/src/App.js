import React from 'react';
import Homepage from './pages/Homepage'
import '../src/App.css'
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from '../src/pages/shop/shopPage'
import Header from '../src/components/header/header'
import SignInAndSignUpPage from '../src/components/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase-utils'
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import { selectCurrentUser } from '../src/redux/user/user.selector';
import {createStructuredSelector} from 'reselect'
import Checkout from '../src/components/checkout/checkout'


class App extends React.Component {

  unsubscribeFromAuth = null
  
  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });   
      }
      else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
      <Header />
      <Switch>
       <Route exact path='/' component={Homepage} />
       <Route path='/shop' component={ShopPage} />
       <Route  exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage />)} /> 
       <Route exact path='/checkout' component={Checkout} />
    </Switch>  
  </div>
      
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
