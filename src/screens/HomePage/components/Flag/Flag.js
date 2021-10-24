import React, { useEffect, useRef, useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Zoom from "@material-ui/core/Zoom";
import CopyIcon from "@material-ui/icons/AddToPhotosRounded";
import DoneIcon from "@material-ui/icons/DoneRounded";
import { makeStyles } from "@material-ui/core/styles";
import { capitalize } from "../../../../util/capitalize";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    [theme.breakpoints.down(350)]: {
      padding: "20px 10px",
    },
    "&:not(:last-of-type)": {
      marginBottom: "20px",
    },
  },
  image: {
    marginRight: "10px",
    width: "80px",
    objectFit: "contain",
    boxShadow: theme.shadows[3],
  },
  name: {
    color: theme.palette.text.primary,
    fontSize: "18px",
    fontWeight: "bold",
    flexGrow: "1",
  },
  iconButton: {
    position: "relative",
    width: "24px",
    height: "24px",
    boxSizing: "content-box",
  },
  icon: {
    color: theme.palette.primary.main,
    position: "absolute",
  },
}));

const Flag = ({ flag }) => {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(`@prideflagbot ${flag.name}`).then(() => {
      setCopied(true);
      timeout.current = setTimeout(() => setCopied(false), 5000);
    });
  };

  return (
    <Card elevation={3} className={classes.root}>
      <img src={flag.flag.default} alt={flag.name} className={classes.image} />
      <Typography className={classes.name}>{capitalize(flag.name)}</Typography>
      <IconButton
        onClick={() => handleCopy()}
        className={classes.iconButton}
        aria-label={
          copied
            ? "Flag name has been copied to clipboard"
            : `Copy ${flag.name} to clipboard`
        }
      >
        <Zoom in={copied}>
          <DoneIcon className={classes.icon} />
        </Zoom>
        <Zoom in={!copied}>
          <CopyIcon className={classes.icon} />
        </Zoom>
      </IconButton>
    </Card>
  );
};

export default Flag;
