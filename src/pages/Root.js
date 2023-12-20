import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/Main Layout/MainNavigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logActions } from "../store/userlog";

function RootLayout() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.log);

  const getTokenDuration = () => {
    if (currentUser.token === "") {
      return;
    }
    const storedExpirationDate = currentUser.expire;
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
  };

  useEffect(() => {
    if (currentUser.token === "") {
      return;
    }
    const tokenDuration = getTokenDuration();
    if (tokenDuration < 0) {
      dispatch(logActions.logOut());
    }
    console.log(tokenDuration);
    setTimeout(() => {
      dispatch(logActions.logOut());
    }, tokenDuration);
  }, [currentUser]);
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
