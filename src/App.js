
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter,
  Routes,
  Route,
  
  
} from "react-router-dom";


function App() {
  const [mode,setMode]= useState('light');  
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type) =>
  {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }
  

  
  const toggleMode = () =>
  {
    if ( mode === 'dark')
    { setMode('light');
    document.body.style.backgroundColor= 'white';
    showAlert("Light mode enabled","success");
    document.title='TextUtile - Light Mode';
   
  }
    else
    {
    setMode('dark');
    document.body.style.backgroundColor= '#0c3767';
    showAlert("Dark mode enabled","success");
    document.title='TextUtile - Dark Mode';
    
    }
  }
  return (
    <>
<Navbar title= "Txtutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">

  <BrowserRouter>
    <Routes>
      
          <Route exact path="/about" element={<About mode={mode} />} />
          
          < Route exact path="/"
           
          element= {<TextForm heading="Try TextUtils - Word Counter, Text Counter " showAlert={showAlert} mode={mode}/>} /> 
          
     </Routes>
  </BrowserRouter>
  
   </div>
  </>
  );
}

export default App;
