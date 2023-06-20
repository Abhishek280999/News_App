import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = ()=> {
  const [progress, setProgress] = useState(0)
 
    return (
      <>
         <Router>
        <Navbar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
          <Route exact path="/"><News setProgress={setProgress}  key="general"  category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} key="business"  category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment"  category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} key="general"  category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} key="health"  category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} key="science"  category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} key="sports"  category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} key="technology"  category="technology"/></Route> 
        </Router> 
      </>
    )
 
}

export default App;