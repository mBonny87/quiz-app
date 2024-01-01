import { Card, CardProps } from '../../atoms/card';

type CardListProps = {
  list: CardProps[];
};

export const CardsList: React.FC<CardListProps> = ({ list }) => {
  const renderedList = list.map((card, i) => <Card key={i} {...card}></Card>);

  return <div className="flex flex-wrap gap-[2.4rem]">{renderedList}</div>;
};
