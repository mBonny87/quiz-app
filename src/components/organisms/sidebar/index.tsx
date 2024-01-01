type SidebarProps = {
  children: React.ReactNode;
};

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <aside className="container-column-start h-full min-w-80 gap-[1.6rem] overflow-auto px-[2.4rem] py-[1.6rem]">
      {children}
    </aside>
  );
};
