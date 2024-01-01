import { Label, LabelType } from '../label';

type CardDescriptionProps = {
  text: string;
};

export const CardDescription: React.FC<CardDescriptionProps> = ({ text }) => (
  <Label
    type={LabelType.Paragraph}
    className="mt-2 line-clamp-6 place-self-start overflow-hidden text-sm font-medium tracking-normal text-slate-600"
  >
    {text}
  </Label>
);
