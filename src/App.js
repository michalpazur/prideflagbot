import React, { useRef } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import ArrowUp from "@material-ui/icons/ArrowUpwardRounded";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    padding: "108px 30px 30px",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("xs")]: {
      padding: "86px 30px 30px",
    },
    [theme.breakpoints.down(350)]: {
      padding: "70px 5% 5%",
    },
  },
  innerRoot: {
    maxWidth: "1280px",
    margin: "auto",
  },
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const scrollRef = useRef(null);
  const scrolledDown = useScrollTrigger({
    disableHysteresis: true,
    threshold: window.outerHeight / 2,
  });

  return (
    <Router basename="/prideflagbot">
      <Toolbar />
      <div ref={scrollRef} />
      <div className={classes.root}>
        <div className={classes.innerRoot}>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
      <Zoom in={scrolledDown}>
        <Fab
          className={classes.fab}
          size="small"
          color="primary"
          aria-label="Scroll to the top"
          onClick={() =>
            scrollRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          <ArrowUp />
        </Fab>
      </Zoom>
    </Router>
  );
};

export default App;
