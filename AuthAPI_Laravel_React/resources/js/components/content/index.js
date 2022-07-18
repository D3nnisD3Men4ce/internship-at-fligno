import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "../../routes";
import Navbar from "../navbar";

const Content = () => {
    return (
        <Router>
            <Navbar />
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
