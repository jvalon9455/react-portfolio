import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
       <Router>
      <div>
      <Link to ="/">Home</Link>
      </div>
      <div>
      <Link to ="/portfolio">Portfolio</Link>
      </div>
      <div>
      <Link to ="/contact">Contact</Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
     

      </Router>
    </div>
  );
}

export default App;
