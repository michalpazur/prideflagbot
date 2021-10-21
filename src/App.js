import React from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    padding: "108px 30px 30px",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  },
  innerRoot: {
    maxWidth: "1280px",
    margin: "auto",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router basename="/prideflagbot">
      <Toolbar />
      <div className={classes.root}>
        <div className={classes.innerRoot}>
          <Switch>
            <Route path="/"></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
