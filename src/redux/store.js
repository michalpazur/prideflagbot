import { createStore, combineReducers, applyMiddleware } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import _ from "lodash";

import themeReducer from "./modules/theme";

const rootReducer = combineReducers({
  themeReducer: themeReducer,
});

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    return;
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const configureStore = () => {
  const store = createStore(rootReducer, loadState(), devToolsEnhancer());
  store.subscribe(
    _.throttle(() => {
      saveState({
        themeReducer: store.getState().themeReducer,
      });
    }, 1000)
  );

  return store;
};

export const store = configureStore();
