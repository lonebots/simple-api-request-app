import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./User/user.reducer";

const store = createStore(
    userReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const dispatch = store.dispatch;

export { store, dispatch };