import { render, screen } from "@testing-library/react";
import { PrivateRoute } from "../../../auth/router/PrivateRoute";

describe("Pruebas en PrivateRoute", () => {
  test("Debe de mostrar el children si está autenticado", () => {
    
    Storage.prototype.setItem = jest.fn();

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
                <PrivateRoute>
                  <h1>Ruta privada</h1>
                </PrivateRoute>
              }
            />
            <Route path="marvel" element={<h1>Página marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/search?q=batman' );
  });
});
