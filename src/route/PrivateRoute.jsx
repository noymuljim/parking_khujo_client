import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
        const { user, loading } = useAuth();
            const location = useLocation()

          if (loading) {
        return <div>
            <span className="loading loading-ring loading-lg"></span>
              </div>
    }


    if (!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>;
    }
    return children;
};

export default PrivateRoute;