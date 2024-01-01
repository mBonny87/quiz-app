import { Label, LabelType } from '../label';

type CardSubtitleProps = {
  subtitle: string;
};

export const CardSubtitle: React.FC<CardSubtitleProps> = ({ subtitle }) => (
  <Label
    type={LabelType.SectionSubtitle}
    className="mt-4 line-clamp-1 w-full place-self-start overflow-hidden text-xl font-bold text-slate-800"
  >
    {subtitle}
  </Label>
);
