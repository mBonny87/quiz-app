import { useQuery } from 'react-query';
import axios from 'axios';

export const useLocalDb = () => {
  const { data, isLoading, isError } = useQuery<Quiz[]>(
    'GET_QUIZZES',
    async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_CONNECTION_STRING}/quizzes`
      );
      return data;
    }
  );

  return {
    loading: isLoading,
    error: isError,
    data,
  };
};
