import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DCPage } from "../heroes/pages/DCPage";
import { MarvelPages } from "../heroes/pages/MarvelPages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="marvel" element={<MarvelPages />}></Route>
        <Route path="dc" element={<DCPage />}></Route>

        <Route path="login" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
};
