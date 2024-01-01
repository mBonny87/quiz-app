import { ChangeEventHandler } from 'react';
import {} from '../../atoms/checkbox';
import { InputRadio } from '../../atoms/input-radio';
import { Answer } from '../../../store/api/quiz';

type RadioGroupProps = {
  className: string;
  options: Answer[];
  selectedOption?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  onChange,
  selectedOption,
  className,
}) => {
  const renderedFilters = options.map((item) => (
    <InputRadio
      key={item.id}
      id={item.id}
      text={item.text}
      selectedOption={selectedOption}
      onChange={onChange}
    ></InputRadio>
  ));
  return <div className={className || ''}>{renderedFilters}</div>;
};
