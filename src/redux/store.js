import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {contactsReducer} from './contacts/contactsSlice';
import filterReduser from './contacts/filtersSlice';
import { authReducer } from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistReduser = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistReduser,
    contacts: contactsReducer,
    filter: filterReduser,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);