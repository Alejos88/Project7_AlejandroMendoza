import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import ContenedorTarjetas from './components/Contenedortarjetas/ContenedorTarjetas'
import './App.css'


function App() {
  return (
    <>
    <Navbar /> 
      {/* <ContenedorTarjetas /> */}
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Card" element={<ContenedorTarjetas/>}/>
      
    </Routes>
    <Footer /> 
    </>
  )
}

export default App;
