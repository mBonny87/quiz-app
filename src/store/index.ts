import { configureStore } from '@reduxjs/toolkit';
import { quizApi } from './api/quiz';
import languageReducer from './slices/language';

export const store = configureStore({
  reducer: {
    [quizApi.reducerPath]: quizApi.reducer, // slice coming from the api (rtkq)
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(quizApi.middleware); // concat the api middleware to the default middleware
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
