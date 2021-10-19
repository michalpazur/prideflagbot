import React, { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createTheme, useTheme, ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { store } from "./redux/store";
import { themeAction } from "./redux/modules/theme";

const Wrapper = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeReducer.theme);
  const defaultTheme = useTheme();
  const hasChanged = useSelector((state) => state.themeReducer.hasChanged);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (!hasChanged) {
      dispatch(
        themeAction.changeTheme({
          theme: prefersDarkMode ? "dark" : "light",
          hasChanged: false,
        })
      );
    }
  }, [prefersDarkMode]);

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          type: theme,
          background: {
            paper: theme === "light" ? "#FFFFFF" : "#0A1929",
            default: theme === "light" ? "#F3F6F9" : "#001E3C",
          },
          primary: {
            main: theme === "light" ? "#007FFF" : "#3399FF",
          },
          text: {
            main: theme === "light" ? "#0A1929" : "#FFFFFF",
            secondary: theme === "light" ? "#46505A" : "#AAB4BE",
          },
        },
        typography: {
          fontFamily: ['"IBM Plex Sans"', "Roboto", "sans-serif"].join(", "),
        },
        shape: {
          borderRadius: "10px",
        },
        overrides: {
          MuiTypography: {
            root: {
              transition: defaultTheme.transitions.create("color", {
                duration: defaultTheme.transitions.duration.standard,
              }),
            },
          },
          MuiButton: {
            sizeSmall: {
              padding: "5px 10px",
              minWidth: "unset",
            },
          },
        },
      }),
    [theme]
  );

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Wrapper>
        <App />
      </Wrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
