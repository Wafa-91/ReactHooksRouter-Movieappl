
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Poster from './components/Poster';


function App() {

  

  return (
    <div className="App">
   <BrowserRouter>
    
    <Route exact path="/" component={Home}/>
    <Route  path='/poster/:title'component={Poster}/>
  
    </BrowserRouter>
    
     
    </div>
  );
}

export default App;
