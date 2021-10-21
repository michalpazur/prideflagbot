import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import MenuIcon from "@material-ui/icons/MenuRounded";
import CloseIcon from "@material-ui/icons/CloseRounded";
import LightThemeIcon from "@material-ui/icons/WbSunnyOutlined";
import DarkThemeIcon from "@material-ui/icons/Brightness2Outlined";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link, useLocation } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import { themeAction } from "../../redux/modules/theme";
import clsx from "clsx";
import icon from "../../static/icon.jpg";

const links = [
  {
    name: "Flag list",
    link: "/",
  },
  {
    name: "FAQ",
    link: "/faq",
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
  },
  name: {
    fontWeight: "bold",
    fontSize: "18px",
    color: theme.palette.text.primary,
    marginRight: "20px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
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
      [theme.breakpoints.down("sm")]: {
        marginRight: "0px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px",
      width: "100%",
      textAlign: "center",
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
  iconSpacer: {
    width: "24px",
    height: "24px",
  },
  icon: {
    position: "absolute",
  },
  bottomRoot: {
    paddingBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Toolbar = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSelector((state) => state.themeReducer.theme);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const renderLinks = () => {
    return links.map((link) => (
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
    ));
  };

  const renderButtons = () => {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  };

  return (
    <AppBar elevation={3} className={classes.appbar} color="transparent">
      <MuiToolbar className={classes.toolbar}>
        <Avatar src={icon} className={classes.avatar} />
        <Typography className={classes.name}>PrideFlagBot</Typography>
        <div className={classes.spacer}>
          <Hidden smDown>{renderLinks()}</Hidden>
        </div>
        <Hidden smDown>{renderButtons()}</Hidden>
        <Hidden mdUp>
          <Button
            size="small"
            variant="outlined"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={classes.iconSpacer} />
            <Zoom in={isOpen}>
              <CloseIcon className={classes.icon} />
            </Zoom>
            <Zoom in={!isOpen}>
              <MenuIcon className={classes.icon} />
            </Zoom>
          </Button>
        </Hidden>
      </MuiToolbar>
      <Collapse in={isOpen}>
        <div className={classes.bottomRoot}>
          {renderLinks()}
          <div>{renderButtons()}</div>
        </div>
      </Collapse>
    </AppBar>
  );
};

export default Toolbar;
