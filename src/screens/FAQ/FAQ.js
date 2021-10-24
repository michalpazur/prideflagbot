import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    color: theme.palette.text.primary,
    textAlign: "center",
  },
}));

const FAQ = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.header}>
      This page is currently under construction 🏗️
    </Typography>
  );
};

export default FAQ;
