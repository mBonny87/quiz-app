import { useDispatch } from 'react-redux';
import { type Language, setLanguage } from '../store/slices/language';

export const useLanguageSwitcher = () => {
  const dispatch = useDispatch();

  const switchLanguage = (language: Language) => {
    dispatch(setLanguage(language));
  };

  return switchLanguage;
};
