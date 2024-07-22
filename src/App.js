
import './App.css';
import Forgot from './Components/Forgotpassword/Forgot';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Resetpassword from './Components/Resetpassword/Resetpassword';
// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
import MainPage from './MainPage/MainPage';
import {Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/resetpassword" element={<Resetpassword/>}/>
      </Routes>
   
    </>
  );
}

export default App;
