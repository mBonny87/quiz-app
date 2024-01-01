import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Language = 'en' | 'it';

const languageSlice = createSlice({
  name: 'language',
  initialState: 'en' as Language,
  reducers: {
    setLanguage: (_, action: PayloadAction<Language>) => action.payload,
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
