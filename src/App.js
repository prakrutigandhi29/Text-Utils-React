import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React,{useState} from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({msg:message,
                type: type
            })
      setTimeout(()=>{
        setAlert(null)
      },2000);
  }
 const toggleMode=()=>{
   if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
   }
  else{
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode enabled","success");
  }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
   
    <div className="container">
      <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={ <Form heading="Enter text here" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
      </div>
   </Router>
    </>
  );
}

export default App;
