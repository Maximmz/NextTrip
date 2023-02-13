import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Login from "./pages/Login";
import Skardu from "./pages/Skardu";
import Swat from "./pages/Swat";
import Gilgit from "./pages/Gilgit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Destinations} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path='/destinations/1' exact component={Swat} />
          <Route path='/destinations/2' exact component={Skardu} />
          <Route path='/destinations/3' exact component={Gilgit} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
