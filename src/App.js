import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbarr from './components/Customer/Navbar';
import MomCareApp from './components/MomCareApp';


function App() {
  return (
    <div>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="light" 
      />
      <Navbarr />
      <MomCareApp />  {/* Add the new component here */}
    </div>
  );
}

export default App;
