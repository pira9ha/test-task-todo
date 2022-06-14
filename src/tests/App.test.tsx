import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App';
import {Provider} from "react-redux";
import {store} from "../stateWorker/store";

describe('CreateNewList', () => {

  beforeEach(() => {
    render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );
  });

  it('should render app', () => {
    expect(screen.getByText('todos')).toBeInTheDocument();
    expect(screen.getByText('Создать новый список задач')).toBeInTheDocument();
    expect(screen.getByText('Первый список, который можно отредактировать. Просто нажми на меня!')).toBeInTheDocument();
  });

  it('after click on "add" button should open form', () => {
    let addButton = screen.getByText('Создать новый список задач');

    fireEvent.click(addButton, new MouseEvent('click', {bubbles: true}));
    let submitButton = screen.getByText('Сохранить');
    const resetButton = screen.getByText('Отмена');
    expect(submitButton).toBeDisabled();

    fireEvent.click(resetButton, new MouseEvent('click', {bubbles: true}));
    addButton = screen.getByText('Создать новый список задач');
    expect(addButton).toBeInTheDocument();
    fireEvent.click(addButton, new MouseEvent('click', {bubbles: true}));
    submitButton = screen.getByText('Сохранить');
    const input = screen.getByPlaceholderText('Название списка');

    fireEvent.change(input, {target: {value: 'new list'}});
    expect(input).toHaveValue('new list');
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton, new MouseEvent('click', {bubbles: true}));
    expect(screen.getByText('new list')).toBeInTheDocument();
  });
});
