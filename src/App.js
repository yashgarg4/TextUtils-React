import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null)

  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Darkmode has been enabled", "success");
      // document.title = "TextUtils - DarkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Lightmode has been enabled", "success");
      // document.title = "TextUtils - LightMode";
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">{/* container is class of bootstrap that gives text area a center and defined look. my-3 is also a class of bootstrap that gives margins . */}
      {/* <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>  */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading= "Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />
          {/* </Route>
      </Switch>  */}
      </div>
      {/* </Router>  */}
    </>
  );
}

export default App;
