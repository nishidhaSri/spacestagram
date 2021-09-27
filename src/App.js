import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/index";
import Favorites from "./pages/Favorites/index";
import Home from "./pages/Home/index";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/liked" component={Favorites} />
      </Switch>
    </>
  );
}

export default App;
