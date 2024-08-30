import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import React from "react";

test("renders TodoList component with initial tasks", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Learn Testing")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  expect(screen.getByText("Add")).toBeInTheDocument();
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
  const task = screen.getByText("Learn React");
  fireEvent.click(screen.getByRole("checkbox", { name: /Learn React/i }));
  expect(task).toHaveStyle("text-decoration: line-through");
  fireEvent.click(screen.getByRole("checkbox", { name: /Learn React/i }));
  expect(task).toHaveStyle("text-decoration: none");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("X")[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
