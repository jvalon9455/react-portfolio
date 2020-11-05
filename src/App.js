import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Button />
        {/* <div>
          <Link to="/">About</Link>
        </div>
        <div>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div> */}
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
