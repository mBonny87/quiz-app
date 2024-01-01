import { useParams } from 'react-router-dom';
import { Question, useQuizByIdQuery } from '../../../store/api/quiz';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLinkedList } from '../../../hooks/use-linked-list';

type Answered = Question & {
  answer?: string;
};

export const useQuiz = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuizByIdQuery(id);
  const [list, setList] = useState<Answered[]>([]);
  const [concluded, setConcluded] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) {
      setList(data?.questions || []);
    }
  }, [isLoading, data?.questions]);

  // .map(item, index, array), it follow the same principle
  const [question, index, questions, lastQuestion] = useLinkedList<Answered>(
    list,
    setList
  );

  const quiz = {
    question,
    index,
    questions,
    lastQuestion,
    title: data?.title,
    concluded: {
      value: concluded,
      set: setConcluded,
    },
  };

  const nextQuestion = () => {
    if (quiz.lastQuestion) {
      quiz.concluded.set(true);
    } else {
      quiz.question.next();
    }
  };

  const previousQuestion = () => {
    quiz.question.prev();
  };

  const inputChange = (evt: ChangeEvent) => {
    const { id } = evt.target as HTMLInputElement;
    quiz.question.update({ ...quiz.question.curr, answer: id });
  };

  const results = () =>
    quiz.questions.filter((question) =>
      question.answers.correct
        .map((correct) => correct.id)
        .includes(question.answer!)
    ).length;

  return {
    query: {
      data,
      loading: isLoading,
      error: isError,
    },
    quiz,
    handle: {
      nextQuestion,
      previousQuestion,
      inputChange,
      results,
    },
  };
};
