import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute ({ redirectPath = "/landing", isAllowed, children }) {

      // if user doesnt exit excute the code within the if block
      if ( !isAllowed ) {
        return <Navigate to = { redirectPath } replace />
  }
  return (children ? children: <Outlet/> )
};

