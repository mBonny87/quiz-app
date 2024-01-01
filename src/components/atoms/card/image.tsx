type CardImageProps = {
  imageUrl: string;
};

export const CardImage: React.FC<CardImageProps> = ({ imageUrl }) => (
  <img
    loading="lazy"
    sizes="(max-width: 600px) 480px,
            (max-width: 1000px) 800px,
            1600px"
    srcSet={imageUrl}
    className="h-40 shrink-0 self-stretch"
    alt="Description of the image"
  />
);
