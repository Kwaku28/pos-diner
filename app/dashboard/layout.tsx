import TopNav from "../ui/topnav/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="w-full">
        <TopNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
