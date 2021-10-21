import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import LightThemeIcon from "@material-ui/icons/WbSunnyOutlined";
import DarkThemeIcon from "@material-ui/icons/Brightness2Outlined";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { themeAction } from "../../redux/modules/theme";
import clsx from "clsx";
import icon from "../../static/icon.jpg";

const links = [
  {
    name: "Flag list",
    link: "/",
  },
];

const useStyles = makeStyles((theme) => ({
  appbar: {
    backdropFilter: "blur(20px)",
    backgroundColor: theme.palette.background.paper + "B7",
    padding: "0px 30px",
  },
  toolbar: {
    padding: "0px",
    maxWidth: "1280px",
    width: "100%",
    margin: "auto",
  },
  avatar: {
    marginRight: "20px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  name: {
    fontWeight: "bold",
    fontSize: "18px",
    color: theme.palette.text.primary,
    marginRight: "20px",
  },
  spacer: {
    flexGrow: "1",
    display: "flex",
    alignItems: "center",
  },
  link: {
    fontSize: "18px",
    "&:not(:last-of-type)": {
      marginRight: "20px",
    },
  },
  activeLink: {
    fontWeight: "bold",
  },
  button: {
    marginRight: "10px",
  },
  twitter: {
    color: theme.palette.primary.main,
  },
}));

const Toolbar = () => {
  const classes = useStyles();
  const theme = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <AppBar elevation={3} className={classes.appbar} color="transparent">
      <MuiToolbar className={classes.toolbar}>
        <Avatar src={icon} className={classes.avatar} />
        <Typography className={classes.name}>PrideFlagBot</Typography>
        <div className={classes.spacer}>
          {links.map((link) => (
            <MuiLink
              color="textPrimary"
              component={Link}
              underline="none"
              to={link.link}
              aria-selected={location.pathname === link.link}
              className={clsx(classes.link, {
                [classes.activeLink]: location.pathname === link.link,
              })}
              key={link.link}
            >
              {link.name}
            </MuiLink>
          ))}
        </div>
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
          aria-label="PrideFlagBot's Twitter profile"
        >
          <TwitterIcon className={classes.twitter} />
        </Button>
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
