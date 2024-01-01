type HeaderProps = {
  children: React.ReactNode;
  className?: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <header
      className={`${
        className || ''
      } container-between-center gap-[1.6rem] px-[2.4rem] py-[1.6rem]`}
    >
      {children}
    </header>
  );
};
