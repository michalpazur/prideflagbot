import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LightThemeIcon from "@material-ui/icons/WbSunnyOutlined";
import DarkThemeIcon from "@material-ui/icons/Brightness2Outlined";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { themeAction } from "./redux/modules/theme";
import icon from "./static/icon.jpg";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backdropFilter: "blur(20px)",
    backgroundColor: theme.palette.background.paper + "B7",
  },
  toolbar: {
    padding: "0px 150px",
  },
  avatar: {
    marginRight: "20px",
  },
  name: {
    fontWeight: "bold",
    fontSize: "18px",
    color: theme.palette.text.primary,
  },
  spacer: {
    flexGrow: "1",
  },
  root: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  },
  button: {
    marginRight: "10px",
  },
  twitter: {
    color: theme.palette.primary.main,
  },
}));

const App = () => {
  const classes = useStyles();
  const theme = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <AppBar elevation={3} className={classes.appbar} color="transparent">
        <Toolbar className={classes.toolbar}>
          <Avatar src={icon} className={classes.avatar} />
          <Typography className={classes.name}>PrideFlagBot</Typography>
          <div className={classes.spacer} />
          <Button
            size="small"
            variant="outlined"
            className={classes.button}
            onClick={() =>
              dispatch(
                themeAction.changeTheme({
                  theme: theme === "dark" ? "light" : "dark",
                  hasChanged: true,
                })
              )
            }
          >
            {theme === "light" ? <LightThemeIcon /> : <DarkThemeIcon />}
          </Button>
          <Button
            size="small"
            variant="outlined"
            component="a"
            href="https://twitter.com/prideflagbot"
            target="_blank"
          >
            <TwitterIcon className={classes.twitter} />
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.root} />
    </React.Fragment>
  );
};

export default App;
