import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, authProtectedRoutes } from "./routes";
import Authmiddleware from "./routes/routes";
function App() {
  return (
    <React.Fragment>
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
