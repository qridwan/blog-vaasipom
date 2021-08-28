import { Container, createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Components/Scroll/ScrollToTop";
import { Routes } from "./routes";

const fontTheme = createTheme({
  typography: {
    fontFamily: ["Manrope", "Times"].join(","),
  },
});

function RouteWithSubRoutes(route) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={(props) => {
          return (
            <>
              <route.component {...props} routes={route.routes} />
            </>
          );
        
      }}
    />
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={fontTheme}>
        <Container fixed>
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
