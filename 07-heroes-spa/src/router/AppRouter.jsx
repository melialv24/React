import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoute } from "../auth/router/PrivateRoute";
import { HeroesRoutes } from "../heroes";
import { Navbar } from "../ui/components";
import { PublicRoutes } from '../auth/router/PublicRoutes'

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path="login" element= {
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
        }/>
     

        <Route path="/*"  element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          } 
        />
      </Routes>
    </>
  );
};
