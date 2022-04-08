import './App.css';
import React from 'react';
import Navmui from "./components/NavBarMui";
import Footer from "./components/Footer";
import Home  from './pages/Home';
import About  from './pages/About';

function App() {
  return (
    <div className="App">
        <Navmui />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
