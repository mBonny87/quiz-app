import { CardDescription } from './description';
import { CardSubtitle } from './subtitle';
import { CardTitle } from './title';

type CardContentProps = {
  title: string;
  subtitle: string;
  text: string;
};

export const CardContent: React.FC<CardContentProps> = ({
  title,
  subtitle,
  text,
}) => (
  <article className="flex h-full w-full flex-1 flex-col items-stretch p-6 text-start">
    <CardTitle title={title} />
    <CardSubtitle subtitle={subtitle} />
    <CardDescription text={text} />
  </article>
);
