import { types } from "../../../auth/types/types";

describe("Pruebas en los types", () => {
  test("Debe de regresar estos types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
