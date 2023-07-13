
import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import React, {useState} from 'react';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState('null');
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#e5e2e2'
      showAlert(": Dark mode enabled","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert(": Dark mode disabled","success")
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Form showAlert={showAlert} mode={mode}/>
    {/* <About mode ={mode}/> */}
    </>
  );
}

export default App;
