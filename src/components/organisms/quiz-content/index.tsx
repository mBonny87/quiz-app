import { Label, LabelType } from '../../atoms/label';
import { RadioGroup } from '../../molecules/radio-group';
import { Answer } from '../../../store/api/quiz';
import { ChangeEventHandler } from 'react';

type QuizContentProps = {
  props: QuizContentOptionsProps;
  actions: QuizSettersProps;
};

type QuizContentOptionsProps = {
  question: string;
  answers: Answer[];
  selectedAnswer?: string;
  className?: string;
};
type QuizSettersProps = {
  onInputChange: ChangeEventHandler;
};

export const QuizContent: React.FC<QuizContentProps> = ({ props, actions }) => {
  return (
    <form
      className={`container-between-center w-full ${props?.className || ''}`}
    >
      <fieldset className="flex h-full flex-1 flex-col items-center justify-center gap-[1.6rem]">
        <div className="flex h-full w-full min-w-96 flex-col justify-center gap-[1.6rem] px-96">
          <Label
            type={LabelType.Legend}
            className="flex flex-1 flex-col-reverse"
          >
            {props.question}
          </Label>
          <RadioGroup
            className="ml-4 flex flex-1 flex-col gap-[1.6rem]"
            options={props.answers}
            selectedOption={props.selectedAnswer}
            onChange={actions.onInputChange}
          />
        </div>
      </fieldset>
    </form>
  );
};
