import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
