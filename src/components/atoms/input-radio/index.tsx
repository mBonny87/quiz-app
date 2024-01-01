import { ChangeEventHandler } from 'react';

export type InputRadioProps = {
  id: string;
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  selectedOption?: string;
};

export const InputRadio: React.FC<InputRadioProps> = ({
  id,
  text,
  selectedOption,
  onChange,
}) => {
  return (
    <div className="container flex items-center gap-4">
      <input
        type="radio"
        id={id}
        name="group"
        value={text}
        onChange={onChange}
        checked={selectedOption === id}
      />
      <label htmlFor={id} className="text-2xl font-normal">
        {text}
      </label>
    </div>
  );
};
