const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-28 my-6 sm:my-10 md:my-16 lg:my-20 mb-12 sm:mb-16 md:mb-20">
      {children}
    </div>
  );
};

export default Layout;
