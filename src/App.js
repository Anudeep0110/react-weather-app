import './App.css';
import Login from './Components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Forgotpass from './Components/Forgotpass';
import Weather from './Components/Weather'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/forgotpassword' element={<Forgotpass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
