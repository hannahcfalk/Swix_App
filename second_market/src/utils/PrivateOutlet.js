import { useContext } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateOutlet = () => {
  let { user } = useContext(AuthContext);
  console.log(user);
  
  const { pathname } = useLocation();
  console.log({ pathname });

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: pathname }} replace />
  );
};

export default PrivateOutlet;
