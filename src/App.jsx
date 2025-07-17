import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
// import './App.css'
import Chatwindow from './Chatwindow.jsx'
import Intro from './Intro.jsx';

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/intro" element={<Intro/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/ScrapAndChat" element={<Chatwindow/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
