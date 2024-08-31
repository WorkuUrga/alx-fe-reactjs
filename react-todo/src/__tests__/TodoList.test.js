import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("Write Initial Render Test", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Learn Testing")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("Test Adding Todos", () => {
  render(<TodoList />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("Test Toggling Todos", () => {
  render(<TodoList />);
  const task = screen.getByText("Learn React");
  fireEvent.click(screen.getByLabelText("Learn React")); // Assuming TodoItem uses label
  expect(task).toHaveStyle("text-decoration: line-through");
  fireEvent.click(screen.getByLabelText("Learn React")); // Toggle back
  expect(task).not.toHaveStyle("text-decoration: line-through");
});

test("Test Deleting Todos", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("X")[0]; // Assuming "X" is used for delete
  fireEvent.click(deleteButton);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
