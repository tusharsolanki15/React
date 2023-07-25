import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Weather dark mode is enable or not
  const [btntext, setBtnText] = useState('Enable DarkMode'); //change the mode button text
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      setBtnText('Disable DarkMode')
      document.body.style.backgroundColor = 'rgb(1 40 72)'
      showAlert(" Dark Mode has been Enabled", "success")
    }
    else {
      setMode('light')
      setBtnText('Enable DarkMode')
      document.body.style.backgroundColor = 'white'
      showAlert(" light Mode has been Enabled", "success")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About" mode={mode} btntext={btntext} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/About" element={<About mode={mode}/>} oncli />
          <Route exact path="/" element={<div className="container">
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces  " mode={mode} />
          </div>} />
         </Routes>
        <Footer />
      </BrowserRouter>  
    </>
  );
}



export default App;
