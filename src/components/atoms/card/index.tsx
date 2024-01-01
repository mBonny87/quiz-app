import { CardContent } from './content';
import { CardImage } from './image';

export type CardProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
  text: string;
  onClick: () => void;
};

export const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  subtitle,
  text,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex h-[30rem] w-[25rem] cursor-pointer flex-col items-stretch overflow-hidden rounded-[32px] bg-white shadow-lg transition-all hover:scale-110"
    >
      <CardImage imageUrl={imageUrl} />
      <CardContent title={title} subtitle={subtitle} text={text} />
    </div>
  );
};
