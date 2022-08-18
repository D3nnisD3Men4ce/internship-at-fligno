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
    {
        pathname: '/product',
        exact: true,
        element: () => <Product />
    },
    {
        pathname: '/team',
        exact: true,
        element: () => <Team />
    },
    {
        pathname: '/contact',
        exact: true,
        element: () => <Contact />
    },
    
];


export default routes;
