import React, { useContext } from 'react';

import { Navigate,useLocation} from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders/AuthProviders';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <h1>Loading....</h1>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{from :location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;