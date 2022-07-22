import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe("probando el todoItem", () => {
  const todo = {
    id: 1,
    description: "piedra del alma",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrar el todo pendiente", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe("");

    const spanElement = screen.getByLabelText("span");
    // Se espera que contenga más no sea exactamente igual a esa clase
    expect(spanElement.className).toContain("align-self-center");
  });
});
