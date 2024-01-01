import { Button, ButtonProps } from '../../atoms/button';

type ButtonGroupProps = {
  className?: string;
  buttons: ButtonProps[];
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  className,
}) => {
  const renderedButtons = buttons.map((button) => (
    <Button
      key={button.label}
      {...button}
      // label={button.label}
      // variant={button.variant}
      // onClick={button.onClick}
      // disabled={button.disabled}
    />
  ));
  return (
    <div className={`container-between-center gap-6 ${className || ''}`}>
      {renderedButtons}
    </div>
  );
};
