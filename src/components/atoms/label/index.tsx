// eslint-disable-next-line react-refresh/only-export-components
export enum LabelType {
  Title = 'title',
  Subtitle = 'subtitle',
  SectionTitle = 'section-title',
  SectionSubtitle = 'section-subtitle',
  Paragraph = 'paragraph',
  Legend = 'legend',
}

type LabelProps = {
  type: LabelType;
  className?: string;
  children: string;
};

export const Label: React.FC<LabelProps> = ({ type, className, children }) => {
  switch (type) {
    case LabelType.Title:
      return (
        <h1
          className={`${
            className || ''
          } text-[3.8rem] font-semibold leading-[4.6rem]`}
        >
          {children}
        </h1>
      );
    case LabelType.Subtitle:
      return (
        <h2
          className={`${
            className || ''
          } text-[2.4rem] font-medium leading-[2.9rem]`}
        >
          {children}
        </h2>
      );
    case LabelType.SectionTitle:
      return (
        <h3
          className={`${
            className || ''
          } text-[2rem] font-normal leading-[2.4rem]`}
        >
          {children}
        </h3>
      );
    case LabelType.SectionSubtitle:
      return (
        <h4
          className={`${
            className || ''
          } text-[1.6rem] font-normal leading-[1.9rem]`}
        >
          {children}
        </h4>
      );
    case LabelType.Paragraph:
      return (
        <h5 className={`${className || ''} text-base font-medium leading-6`}>
          {children}
        </h5>
      );
    case LabelType.Legend:
      return (
        <legend
          className={`${
            className || ''
          } text-[2.4rem] font-medium leading-[2.9rem]`}
        >
          {children}
        </legend>
      );
    default:
      return (
        <h5 className={`${className || ''} text-base font-medium leading-6`}>
          {children}
        </h5>
      );
  }
};
