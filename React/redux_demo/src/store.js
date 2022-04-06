import { createStore } from "redux";
import counterReducer from "./reducer/counterReducer";
function configureStore(state = 0) {
  return createStore(counterReducer, state);
}
export default configureStore;
