import "./App.css";
import About from "./components/About";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";


function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="about"/>
      {/* <div className="container">
        <TextForm heading="Enter the text to analyze below"  />
      </div> */}
      <About/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
