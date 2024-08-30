import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText("task 1")).toBeInTheDocument();
  expect(screen.getByText("task 2")).toBeInTheDocument();
  expect(screen.getByText("task 3")).toBeInTheDocument();

  expect(screen.getByText("Add")).toBeInTheDocument();
  expect(screen.getAllByText("X")[0]).toBeInTheDocument();
});

test("adding tasks", () => {
  render(<TodoList />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("deleting tasks", () => {
  render(<TodoList />);
  fireEvent.click(screen.getAllByText("X"[0]));
  expect(screen.queryByText("task 1")).not.toBeInTheDocument();
});
test("toggling tasks", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("task 1"));
  const toggledTask = screen.getByText("task 1");
  expect(toggledTask).toHaveStyle("text-decoration: line-through");
});
