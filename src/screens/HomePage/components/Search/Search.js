import React, { useRef, useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/CloseRounded";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  input: {
    flexGrow: "1",
    maxWidth: "500px",
  },
}));

const Search = ({ updateValue }) => {
  const classes = useStyles();
  const timeout = useRef(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  const handleChange = (value) => {
    clearTimeout(timeout.current);
    setValue(value);
    if (!value || value === "") {
      updateValue(value);
    } else {
      timeout.current = setTimeout(() => updateValue(value), 300);
    }
  };

  return (
    <Box className={classes.root}>
      <TextField
        className={classes.input}
        placeholder="Type to search"
        variant="outlined"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        InputProps={{
          endAdornment: value && value.length > 0 && (
            <InputAdornment position="end">
              <IconButton onClick={() => handleChange("")}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
