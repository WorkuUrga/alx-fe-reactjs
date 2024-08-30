import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
test("renders TodoList component with initial tasks", () => {
  render(<TodoList />);
  expect(screen.getByText("task 1")).toBeInTheDocument();
  expect(screen.getByText("task 2")).toBeInTheDocument();
  expect(screen.getByText("task 3")).toBeInTheDocument();
  expect(screen.getByText("Add")).toBeInTheDocument();
  expect(screen.getAllByText("X")[0]).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo completed state", () => {
  render(<TodoList />);
  const task = screen.getByText("task 1");
  fireEvent.click(screen.getByLabelText("task 1"));
  expect(task).toHaveStyle("text-decoration: line-through");
  fireEvent.click(screen.getByLabelText("task 1")); // Toggle back
  expect(task).toHaveStyle("text-decoration: none");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("X")[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText("task 1")).not.toBeInTheDocument();
});
