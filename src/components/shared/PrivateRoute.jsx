import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AppContext from "../../context/AppContext";

function PrivateRoute() {
  const { state } = useContext(AppContext);
  return (
    <>{state.isCaptchaValidated ? <Outlet /> : <Navigate to="/" replace />}</>
  );
}

export default PrivateRoute;
