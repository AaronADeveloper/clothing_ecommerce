import React from 'react';
import Homepage from './pages/Homepage'
import '../src/App.css'
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Homepage} />
      
    </Switch>  
    </div>
  );
}

export default App;
