import { useNavigate } from 'react-router-dom';
import { Label, LabelType } from '../../atoms/label';
import { Header } from '../../organisms/header';
import { QuizContent } from '../../organisms/quiz-content';
import { ButtonGroup } from '../../molecules/buttons-group';
import { ResultPage } from '../../organisms/quiz-content/result';
import { useQuiz } from './useQuiz';
import { useIntl } from 'react-intl';

export const QuizTemplate = () => {
  const navigate = useNavigate();
  const intl = useIntl();

  const { query, quiz, handle } = useQuiz();

  if (query.loading || !quiz.question.curr) {
    return <>Loading...</>;
  }
  if (query.error) {
    return <>Error</>;
  }

  const previousButtonState = !quiz.index;
  const nextButtonState = !quiz.question.curr.answer;

  const currentQuestion = quiz.index + 1;
  const totalQuestions = quiz.questions.length;

  return (
    <>
      <Header>
        <button
          className="container-between-center absolute gap-3 text-slate-800"
          onClick={() => navigate(-1)}
        >
          <span className="text-4xl">&larr;</span>
          <Label type={LabelType.Subtitle}>
            {intl.formatMessage({
              defaultMessage: 'Back to home',
              id: 'aIRWQBzEDUQ3vRj6',
            })}
          </Label>
        </button>
        <div className="flex flex-1 flex-col items-center justify-items-center text-center">
          <Label className="text-slate-800" type={LabelType.Title}>
            {quiz.title || ''}
          </Label>

          <Label className="text-slate-800" type={LabelType.Subtitle}>
            {`${currentQuestion}/${totalQuestions}`}
          </Label>
        </div>
      </Header>
      {quiz.concluded.value ? (
        <ResultPage
          results={{
            correct: handle.results(),
            total: quiz.questions.length,
          }}
        ></ResultPage>
      ) : (
        <div className="flex h-full flex-col gap-6">
          <QuizContent
            props={{
              selectedAnswer: quiz.question.curr.answer,
              answers: quiz.question.curr.mergedAnswers,
              question: quiz.question.curr.title,
              className: 'flex-[4]',
            }}
            actions={{ onInputChange: handle.inputChange }}
          ></QuizContent>
          <ButtonGroup
            className="flex-[1] px-40"
            buttons={[
              {
                label: intl.formatMessage({
                  defaultMessage: 'Previous',
                  id: 'JJNc3cbYIJA6fJ/V',
                }),
                variant: 'secondary',
                onClick: handle.previousQuestion,
                disabled: previousButtonState,
              },
              {
                label: quiz.lastQuestion
                  ? intl.formatMessage({
                      defaultMessage: 'Finish',
                      id: '2O2sfpNPaM31/S7j',
                    })
                  : intl.formatMessage({
                      defaultMessage: 'Next',
                      id: '9+DdtuCqLwglR8tw',
                    }),
                variant: 'primary',
                onClick: handle.nextQuestion,
                disabled: nextButtonState,
              },
            ]}
          ></ButtonGroup>
        </div>
      )}
    </>
  );
};
