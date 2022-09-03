import { STATUSCHANGED, COLORCHANGED } from "./actionTypes";

const initialState = {
  status: "All",
  colors: [],
  completedTaskColors: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLORCHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "completedColorAdd":
          return {
            ...state,
            completedTaskColors: [...state.completedTaskColors, color],
          };

        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        case "completedColorRemoved":
          return {
            ...state,
            completedTaskColors: state.completedTaskColors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default filtersReducer;
