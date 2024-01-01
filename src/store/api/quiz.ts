import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { shuffleArray } from '../../utils/utils';

export type Answer = {
  id: string;
  text: string;
};

export type Question = {
  title: string;
  answers: {
    correct: Answer[];
    wrong: Answer[];
  };
  mergedAnswers: Answer[];
};

export type Quiz = {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  text: string;
  topic: string;
  questions: Question[];
};

export const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_CONNECTION_STRING}`,
  }),
  endpoints: (builder) => ({
    quiz: builder.query({
      query: () => 'quizzes',
      transformResponse: (response: Quiz[]) => {
        // const manipulatedData = manipulateData(response);
        return response;
      },
    }),
    quizById: builder.query({
      query: (id) => `quizzes/${id}`,
      transformResponse: (response: Quiz) => {
        return {
          ...response,
          questions: response.questions.map((question) => ({
            ...question,
            mergedAnswers: shuffleArray([
              ...question.answers.correct,
              ...question.answers.wrong,
            ]),
          })),
        };
      },
    }),
  }),
});

export const { useQuizByIdQuery, useQuizQuery } = quizApi;
