import Sidebar from "./sidebar";
import Header from "./Header";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex-1 bg-gray-100 p-8">
                {children}
            </main>
        </div>
    </div>
  );
}