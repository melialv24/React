import { todoReducer } from "../../08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo todo",
      done: false,
    },
  ];

  test("debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("debe de agregar un todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: { id: 2, description: "nuevo todo", done: false },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("debe de remover un todo", () => {
    const action1 = {
      type: "[TODO] Add Todo",
      payload: { id: 2, description: "nuevo todo", done: false },
    };

    const action2 = {
      type: "[TODO] Remove Todo",
      payload: 2,
    };

    const newState = todoReducer(initialState, action1);
    expect(newState.length).toBe(2);
    const newState1 = todoReducer(initialState, action2);
    expect(newState1.length).toBe(1);
  });
});
