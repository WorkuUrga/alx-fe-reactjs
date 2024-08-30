import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";

test("renders TodoList component with initial todos", () => {
  render(<TodoList />);

  // Check initial todos are present
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  expect(screen.getByText("Master JavaScript")).toBeInTheDocument();
});

test("allows a user to add a new todo", () => {
  render(<TodoList />);

  const inputElement = screen.getByPlaceholderText("Add a new todo");
  const addButton = screen.getByText("Add Todo");

  // Add a new todo
  fireEvent.change(inputElement, { target: { value: "Write unit tests" } });
  fireEvent.click(addButton);

  // Verify the new todo is added
  expect(screen.getByText("Write unit tests")).toBeInTheDocument();
});

test("allows a user to toggle a todo item between completed and not completed", () => {
  render(<TodoList />);

  // Assume that the first todo item is "Learn React"
  const firstTodo = screen.getByText("Learn React");

  // Verify initial state (not completed)
  expect(firstTodo).not.toHaveClass("completed");

  // Toggle completion status
  fireEvent.click(firstTodo);

  // Check if the todo is now marked as completed
  expect(firstTodo).toHaveClass("completed");

  // Toggle completion status back
  fireEvent.click(firstTodo);

  // Verify it's no longer marked as completed
  expect(firstTodo).not.toHaveClass("completed");
});

test("allows a user to delete a todo item", () => {
  render(<TodoList />);

  // Assume that the first todo item is "Learn React"
  const firstTodo = screen.getByText("Learn React");

  // Verify initial presence of the todo item
  expect(firstTodo).toBeInTheDocument();

  // Simulate clicking the delete button
  const deleteButton = screen.getByTestId("delete-button-1"); // ID of the first todo
  fireEvent.click(deleteButton);

  // Verify that the todo item is removed from the document
  expect(firstTodo).not.toBeInTheDocument();
});
