import { Children, createContext, useReducer } from "react";

export const WorkoutsContext = createContext();
export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    default:
      return {
        workouts: [...state.workouts],
      };
  }
};
export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });

  dispatch({ type: "SET_WORKOUTS", payload: [{}, {}] });
  return <WorkoutsContext.Provider>{children}</WorkoutsContext.Provider>;
};
