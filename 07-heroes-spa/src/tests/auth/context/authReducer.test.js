import { renderHook } from "@testing-library/react";
import { types } from "../../../auth/types/types";
import { authReducer } from "../../../auth/context/authReducer";

describe("prueba en authReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("debe de (login) llamar el login autenticar y establecer el user", () => {
    const user = { id: "ABC", name: "Melissa Alvarez" };

    const action = {
      type: types.login,
      payload: user,
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("debe de (logout) borrar el name del usuario y logged en false", () => {
    const stateInitial = {
      logged: true,
      user: { id: "ABC", name: "Melissa Alvarez" },
    };

    const action = {
      type: types.logout,
    };

    const state = authReducer(stateInitial, action);

    expect(state).toEqual({
      logged: false,
    });
  });
});
