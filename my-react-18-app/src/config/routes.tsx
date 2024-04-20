import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Login from '../pages/guest/login';
import Customers from '../pages/private/customers'

const routes = [
    {path:"/", element:<Navigate to="login" />},
    {path:"/login", element:<Login/>},
    {path:"/customers", element:<Customers/>}
];
const AppRoutes = () => {
    const route = useRoutes(routes);
    return route
}
export default AppRoutes