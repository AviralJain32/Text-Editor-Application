import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import Alert from './components/Alert'
import { BrowserRouter as Router,
    Routes,
    Route,
    } from 'react-router-dom';
function App() {
  const [mode,setMode]=useState('light');//weather dark mode is enabled or not
  const [alert,setAlert]=useState(null);
  //ek tag hi return hoga 
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  
  }
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode Has Been Enabled","success")
      document.title=`TextUtils-Dark Mode`;
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enabled","success")
      document.title=`TextUtils-Light Mode`;

    }
  }
  return (
    //closing tag sabme lagega
    //exact likhne se exact matcghing hoti hai
    <>
    <Alert alert={alert}></Alert>
    <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}></TextForm>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    {/* this is for v5 edition */}

    {/* <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3" >
      <About></About>
      <Routes>
      <Route exact path="/">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}></TextForm>
      </Route>
      <Route path="/about">
        <About />
      </Route> */}
      {/* Can also use a named `children` prop
      <Route path="/users/:id" children={<User />} /> */}
    {/* </Routes> */}
      {/* </div> */}
    {/* </Router> */}
    </>
  );
}

export default App;
