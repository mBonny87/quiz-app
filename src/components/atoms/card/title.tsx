import { Label, LabelType } from '../label';

type CardTitleProps = {
  title: string;
};

export const CardTitle: React.FC<CardTitleProps> = ({ title }) => (
  <Label
    type={LabelType.SectionTitle}
    className="line-clamp-1 place-self-start overflow-hidden text-xl font-bold text-emerald-400"
  >
    {title}
  </Label>
);
