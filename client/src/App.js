import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Login from "./pages/Login";
import Destination from "./pages/Destination";
import Hotels from "./pages/Hotels";
import Hotel from "./pages/Hotel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path='/destinations/:name' element={<Destination />} />
          <Route path='/destinations/:name/hotels' element={<Hotels />} />
          <Route path='/hotel/:id' element={<Hotel />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
