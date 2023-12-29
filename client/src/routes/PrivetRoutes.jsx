import { Navigate, useLocation,  } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader";


const PrivetRoutes = ({children}) => {
    const { user, loading } = useAuth()
  const loacation = useLocation()
  if(loading) return <Loader/>
  if(user) return children

    return <Navigate to={'/login'} state={{from: loacation}} replace/>
    
};

export default PrivetRoutes;