import { Outlet } from "react-router";
import FooterComponent from "~/components/layoutComponents/footer-component";
import HeaderComponent from "~/components/layoutComponents/header-component";

export function MainLayout() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeaderComponent />
      <div className="flex-1">
        <Outlet />
      </div>
      <FooterComponent />
    </main>
  );
}
