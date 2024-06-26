import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { logger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import { rootSaga } from "./root-saga";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};


const sagaMiddelware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer);


const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddelware,
].filter(Boolean);



const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers,
);

sagaMiddelware.run(rootSaga)

export const persistor = persistStore(store);
