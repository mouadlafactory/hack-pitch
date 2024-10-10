type MainPlatformLayoutI = {
  children?: React.ReactNode;
};

export default function MainPlatformLayout({ children }: MainPlatformLayoutI) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-50">
      <h1 className="text-center">Platform</h1>
      {children}
    </div>
  );
}
