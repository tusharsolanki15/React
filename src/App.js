import "./App.css";
// import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";


function App() {

  const toggleMode = () =>{
    if(mode === "light"){
      setMode('dark')
      setBtnText('Disable DarkMode')
      document.body.style.backgroundColor = 'rgb(1 40 72)' 
    }
    else{
      setMode('light')
      setBtnText('Enable DarkMode') 
      document.body.style.backgroundColor = 'white' 
    }
  }

  
  const[mode, setMode] = useState('light'); // Weather dark mode i senable or not
  const[btntext, setBtnText] = useState('Enable DarkMode');

  return (
    <>
      <Navbar title="TextUtils" aboutText="about" mode={mode}  btntext={btntext} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
      </div>
      {/* <About/> */}
      <Footer/>
    </>
  );
}

export default App;
