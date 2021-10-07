import { createTheme, ThemeProvider } from "@material-ui/core";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Components/Scroll/ScrollToTop";
import TopicSlider from "./Components/Shared/TopicSlider";
import Navigation from "./Pages/Common/Navigation";
import { setShowTopics } from "./redux/actions/dashboardAction";
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

function App(props) {
  const { dashboardState } = props;
  const { page, showTopics } = dashboardState;
  return (
    <Router>
      <ScrollToTop />
      {!page && (
        <>
          <Navigation />
          {showTopics && <TopicSlider />}
        </>
      )}
      <ThemeProvider theme={fontTheme}>
        <>
          <Switch>
            {Routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  );
}

// export default App;
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setShowTopics: setShowTopics,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
