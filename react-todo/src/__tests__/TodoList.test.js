import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "components/TodoList";
describe("TodoList Component", () => {
  // Scenario 1: Renders TodoList component
  test("renders TodoList component", () => {
    render(<TodoList />);
    expect(screen.getByTestId("todo-list")).toBeInTheDocument();
  });

  // Scenario 2: Renders initial state with demo todos
  test("renders initial state with demo todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Learn Testing")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  // Scenario 3: Adds a new todo
  test("adds a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText("Add a new todo"), {
      target: { value: "New Todo" },
    });
    fireEvent.click(screen.getByText("Add Todo"));
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  // Scenario 4: Prevent adding an empty todo
  test("prevents adding an empty todo", () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText("Add Todo"));
    expect(screen.queryByText("")).not.toBeInTheDocument();
  });

  // Scenario 5: Toggles a todo between completed and not completed
  test("toggles a todo between completed and not completed", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("completed"); // Assuming that completed todos get a 'completed' class

    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass("completed");
  });

  // Scenario 6: Deletes a todo
  test("deletes a todo", () => {
    render(<TodoList />);
    fireEvent.click(screen.getByTestId("delete-todo-Learn React"));
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });

  // Scenario 7: Prevent adding duplicate todos
  test("prevents adding duplicate todos", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText("Add a new todo"), {
      target: { value: "Learn React" },
    });
    fireEvent.click(screen.getByText("Add Todo"));
    expect(screen.queryAllByText("Learn React").length).toBe(1);
  });

  // Scenario 8: Input field clears after adding a todo
  test("clears input field after adding a todo", () => {
    render(<TodoList />);
    const inputField = screen.getByPlaceholderText("Add a new todo");
    fireEvent.change(inputField, { target: { value: "New Todo" } });
    fireEvent.click(screen.getByText("Add Todo"));
    expect(inputField.value).toBe("");
  });

  // Scenario 9: Displays error message for invalid input
  test("displays error message for invalid input", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText("Add a new todo"), {
      target: { value: "x" },
    }); // Assuming 'x' is too short
    fireEvent.click(screen.getByText("Add Todo"));
    expect(
      screen.getByText("Todo must be at least 3 characters long")
    ).toBeInTheDocument(); // Assuming this is the error message
  });
});
