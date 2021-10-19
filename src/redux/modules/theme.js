export const themeConstants = {
  CHANGE_THEME: "CHANGE_THEME",
};

export const themeAction = {
  changeTheme: ({ theme, hasChanged }) => ({
    type: themeConstants.CHANGE_THEME,
    theme,
    hasChanged,
  }),
};

const initialState = {
  hasChanged: false,
  theme: "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case themeConstants.CHANGE_THEME: {
      return {
        ...state,
        theme: action.theme,
        hasChanged: action.hasChanged,
      };
    }
    default:
      return state;
  }
};

export default themeReducer;
