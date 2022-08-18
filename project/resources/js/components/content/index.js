import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "../../routes";
import LoginNavbar from "../navbar/loginNavbar";
import DashboardNavbar from "../navbar/dashboardNavbar";


var isLoggedin = true;

const Content = () => {
    return (
        <Router>
            {isLoggedin ? <DashboardNavbar /> : <LoginNavbar />}
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.pathname}
                            exact={route.exact}
                            element={<route.element />}
                        />
                    ))}
                </Routes>
        </Router>
    )
}

export default Content;
