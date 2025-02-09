import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import LoginPage from './components/Customer/LoginSignUp'; // Ensure the correct path
import MembershipPage from './components/Customer/MembershipPage';
import Footer from './components/Dashboard/Footer'; // Ensure the correct path
import Navbarr from './components/Dashboard/Navbarr';
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
        
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={
            <>
              <Navbarr />
              <MomCareApp /> 
              <Footer /> 
            </>
          }
          />
          <Route path="/membership" element={
            <>
              <Navbarr />
              <MembershipPage /> 
              <Footer /> 
            </>
          }
          />

          
        </Routes>
      </div>
  );
}

export default App;
