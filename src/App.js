import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, authProtectedRoutes } from "./routes";
import Authmiddleware from "./routes/routes";
// toast configuration
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route path={route.path} element={route.component} key={index} />
        ))}

        {authProtectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <Authmiddleware isAuthProtected={true}>
                {route.component}
              </Authmiddleware>
            }
            key={idx}
            exact={true}
          />
        ))}
      </Routes>
    </React.Fragment>
  );
}

export default App;
