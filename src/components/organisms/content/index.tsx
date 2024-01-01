type ContentProps = {
  children: React.ReactNode;
};

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <main className="w-full flex-1 overflow-auto px-[2.4rem] py-[1.6rem]">
      {children}
    </main>
  );
};
