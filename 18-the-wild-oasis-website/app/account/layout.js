import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <main className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </main>
  );
}
