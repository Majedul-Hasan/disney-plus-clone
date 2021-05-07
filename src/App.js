import React, {useState} from 'react';

import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Detail from './components/Detail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Login from './components/Login'
import {useSelector} from 'react-redux';
import {selectUser} from './features/user/userSlice'





function App() {
   const user = useSelector(selectUser)
   const [ user, setUser ] = useState( JSON.parse(localStorage.getItem('user'))) 

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
            {
            !user ?          
            <Login />
        
          :
          <>


          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route exact path="/">
             <Home />
          </Route>
</>
}
        </Switch> 
        </Router>
      
      
    </div>
  );
}

export default App;
