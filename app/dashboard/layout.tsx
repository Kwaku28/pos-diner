import TopNav from "../ui/topnav/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-h-screen">
      <div className="w-full">
        <TopNav />
      </div>
      <div className="flex-grow p-2 overflow-y-hidden md:p-12">{children}</div>
    </div>
  );
}
