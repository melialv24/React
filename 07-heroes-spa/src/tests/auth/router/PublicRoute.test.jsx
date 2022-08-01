import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../auth/context/AuthContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "../../../auth/router/PublicRoutes";

jest.mock("../../hooks/useTodos");

describe("Pruebas en publicRoute", () => {
  test("si no estoy autenticado debe de mostrar el children", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoutes>
          <h1>Ruta pública</h1>
        </PublicRoutes>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta pública")).toBeTruthy();
  });

  test("Debe de navegar si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Melissa",
        id: "ABC",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoutes>
                  <h1>Ruta pública</h1>
                </PublicRoutes>
              }
            />
            <Route path="marvel" element={<h1>Página marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Página marvel")).toBeTruthy();
  });
});
