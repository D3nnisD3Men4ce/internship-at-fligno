import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const routes = [
    {
        pathname: '/',
        // exact: true,
        element: () => <Dashboard />
    },
    {
        pathname: '/login',
        // exact: true,
        element: () =>  <Login /> 
    },
    {
        pathname: '/register',
        // exact: true,
        element: () => <Register />
    },

];


export default routes;
