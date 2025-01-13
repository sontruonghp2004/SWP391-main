import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbarr from './components/Customer/Navbar';

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
      <Navbarr/>
    </div>
  );
}

export default App;
