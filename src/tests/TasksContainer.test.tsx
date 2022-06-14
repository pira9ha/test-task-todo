import React from "react";
import {
  cleanup,
  fireEvent,
  screen,
  render,
} from "@testing-library/react";
import { TasksContainer } from "../components/TasksContainer";
import { Provider } from "react-redux";
import { store } from "../stateWorker/store";

afterEach(cleanup);

describe("TaskContainer", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TasksContainer openFlag={true} list={store.getState().appState.lists[0]} />
      </Provider>,
    );
  });

  test("render tasks", () => {
    expect(
      screen.getByText("Задача, которую надо выполнить."),
    ).toHaveTextContent("Задача, которую надо выполнить.");
    expect(screen.getByText("Выполненная задача.")).toHaveTextContent(
      "Выполненная задача.",
    );
  });

  test("add new task", () => {
    let createComponent = screen.getByText("Добавить задачу");
    expect(createComponent).toBeInTheDocument();
    fireEvent.click(createComponent);

    createComponent = screen.getByTestId("form");
    expect(createComponent).toBeInTheDocument();
    const submitButton = screen.getByText("Сохранить");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
    const input = screen.getByPlaceholderText("Название задачи");
    fireEvent.change(input, { target: { value: "third task" } });
    expect(input).toHaveValue("third task");
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton, new MouseEvent("click", { bubbles: true }));
    const newTask = screen.getByText("third task");
    expect(newTask).toBeInTheDocument();
  });

  test("change task status", () => {
    const checkbox = screen.getByTestId("task_1");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox, new MouseEvent("click", { bubbles: true }));
    expect(checkbox).toBeChecked();
  });
});
