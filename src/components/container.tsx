const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 2xl:px-0">
      {children}
    </div>
  );
};

export default Container;
