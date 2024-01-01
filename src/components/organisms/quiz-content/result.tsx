import { useNavigate } from 'react-router-dom';
import { Label, LabelType } from '../../atoms/label';
import { ButtonGroup } from '../../molecules/buttons-group';
import { useMemo } from 'react';
import { useIntl } from 'react-intl';

type ResultProps = {
  correct: number;
  total: number;
};

type ResultPageProps = {
  results: ResultProps;
};

export const ResultPage: React.FC<ResultPageProps> = ({ results }) => {
  const navigate = useNavigate();
  const intl = useIntl();
  const ratioString = `${results.correct}/${results.total}`;

  const ratio = useMemo(
    () => (results.correct * 100) / results.total,
    [results]
  );

  const handleResults = () => {
    if (ratio <= 50) {
      return intl.formatMessage({
        defaultMessage: 'Insufficient.', // 'Insufficiente.'
        id: 'qGH25/3e3oy4SUb4',
      });
    } else if (ratio <= 70) {
      return intl.formatMessage({
        defaultMessage: 'Good but not great!', // 'Bene ma non benissimo!.'
        id: 'tqvf0VE1yPGBEG2k',
      });
    } else if (ratio <= 90) {
      return intl.formatMessage({
        defaultMessage: 'Well done!', // 'Ben fatto!'
        id: 'lJKfqgZ0Pmz8jh56',
      });
    } else {
      return intl.formatMessage({
        defaultMessage: 'Perfect!', // 'perfetto!'
        id: '+PesQDOgO8WmM8eG',
      });
    }
  };

  return (
    <div className="container-column-center h-full">
      <div className="container-column-center h-full flex-1 gap-[2.4rem]">
        <Label type={LabelType.Title}>{handleResults()}</Label>
        <Label type={LabelType.Title} className="text-[9.6rem]">
          {ratioString}
        </Label>
      </div>
      <ButtonGroup
        buttons={[
          {
            variant: 'primary',
            label: intl.formatMessage({
              defaultMessage: 'Back to home',
              id: 'aIRWQBzEDUQ3vRj6',
            }),
            onClick: () => navigate(-1),
          },
        ]}
        className="flex-1"
      ></ButtonGroup>
    </div>
  );
};
