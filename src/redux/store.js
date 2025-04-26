"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "./customStorage";
import { authReducer } from "./authSlice";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export const RootState = store.getState();
export const AppDispatch = store.dispatch;
