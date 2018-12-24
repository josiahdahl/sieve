import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { useClassAsAction } from "./middleware/useClassAsAction";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, useClassAsAction))
);

sagaMiddleware.run(rootSaga);

export default store;
