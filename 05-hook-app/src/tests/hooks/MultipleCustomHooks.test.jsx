import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { fireEvent, render } from "@testing-library/react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("Probando el componente MultipleCustomHook", () => {
  useFetch.mockReturnValue({
    data: [{ author: "melissa", quote: "Hola mundo" }],
    isLoading: false,
    hasError: null,
  });

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  //Limpia los mock antes de cada una ed las pruebas
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrar un Quote", () => {
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Hola mundo")).toBeTruthy();
    expect(screen.getByText("melissa")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("mostrar otro quote cuando se presiona el incrementar", () => {
    const mockIncrement = jest.fn();

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next quote" });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
