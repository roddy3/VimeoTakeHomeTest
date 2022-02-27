import React from 'react'
import './App.css'

import img1 from "./images/img-1.jpg"
import img2 from "./images/img-2.jpg"
import img3 from "./images/img-3.jpg"
import Navigation from "./components/Navigation";

function App() {
  return (   
    <div className="App">
      <div className="FirstText">
          <div>
            <img className="image1" src={img1} atl=""></img>
          </div>
          <div className="MonContent">
            <h2> MONSOON III</h2>
            <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
          </div>
      </div>
      <div className="SecondText">
        <div className="BeamsContent">
          <h2> BEAMS</h2>
          <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
          </p>
        </div>
        <div>
          <img className= "image2" src={img2} atl=""></img>
        </div>
      </div>
      <div className="ThirdText">
          <div>
            <img className="image3" src={img3} atl=""></img>
          </div>
          <div className="Move2">
            <h2> Move 2</h2>
            <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
          </div>
      </div>
        <Navigation/>
    </div>
  );
}

export default App;





