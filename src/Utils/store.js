import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "../Utils/reducer";
import { initialState } from "./reducer";

// on crée le store avec le state et le reducer
export const store = createStore(
  userReducer,
  initialState,
  composeWithDevTools()
);

// store.subscribe(() => {
//   console.log("Nouveau state:");
//   console.log(store.getState());
// });
