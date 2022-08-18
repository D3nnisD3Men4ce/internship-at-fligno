import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import routes from "./routes/pageRoutes";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
              {routes.map((route, index) => (
                  <Route
                      key={ index }
                      path={ route.pathname }
                      exact={ route.exact }
                      element={ <route.element /> }
                  />
              ))}
          </Routes>
        </div>
      </Router>
      {/* <ToastContainer />   */}
    </>
  );
}

export default App;
