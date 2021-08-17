import { Container, createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import { Routes } from "./routes";

const fontTheme = createTheme({
  typography: {
    fontFamily: ["Manrope", "Times"].join(","),
  },
});

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider theme={fontTheme}>
        <Container fixed>
          <Navigation />
          <Switch>
            {Routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
