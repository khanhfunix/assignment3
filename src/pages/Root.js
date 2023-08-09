import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/Main Layout/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
