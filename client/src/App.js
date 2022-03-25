import { Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import Card from "./Components/Card";
import GameDetail from "./Components/GameDetail";

import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Landing} />
      <Route exact path="/Home" component={Home} />

      <Switch>
        <Route exact path="/card" component={Card} />
       
        <Route
          exact
          path="/gameDetail/:id"
          render={({ match }) => <GameDetail id={match.params.id} />}
        />
      </Switch>
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
