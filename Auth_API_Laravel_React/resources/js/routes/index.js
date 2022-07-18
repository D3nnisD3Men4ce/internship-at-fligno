import LoginForm from "../auth/loginForm";
import SignUpForm from "../auth/signUpForm";
import Dashboard from "../components/dashboard";    


const routes = [
    {
        pathname: '/login',
        exact: true,
        element: () =>  <LoginForm /> 
    },
    {
        pathname: '/sign-up',
        exact: true,
        element: () => <SignUpForm />
    },
    {
        pathname: '/dashboard',
        exact: true,
        element: () => <Dashboard />
    },
];


export default routes;
