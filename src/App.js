import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/index";
import Favorites from "./pages/Favorites/index";
import Home from "./pages/Home/index";
import Details from "./pages/Details/Details"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./ThemeChanger/themes";
import { GlobalStyles } from "./ThemeChanger/global";
import { useDarkMode } from "./ThemeChanger/useDarkMode";
import {Toaster} from 'react-hot-toast'

function App() {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <>
    <ThemeProvider theme={theme==="dark"?lightTheme:darkTheme}>
      <GlobalStyles/>
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/liked" component={Favorites} />
        <Route exact path="/details" component={Details} />
      </Switch>
      <Toaster></Toaster>
    </ThemeProvider>
    </>
  );
}

export default App;
