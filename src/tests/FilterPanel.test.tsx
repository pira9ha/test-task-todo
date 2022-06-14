import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../stateWorker/store";
import React from "react";
import {FilterPanel} from "../components/FilterPanel";

describe('FilterPanel', () => {

  beforeEach(() => {
    render(
      <Provider store={store}>
        <FilterPanel list={store.getState().appState.lists[0]} filter={store.getState().appState.filter[0]} />
      </Provider>,
    );
  });

  it('should render filter correct', () => {
    expect(screen.getAllByTestId('filter-radio')).toHaveLength(3);
  });

  it('should init render task count correct', () => {
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('click on filter', () => {
    expect(screen.getByTestId('filter-text-content')).toHaveTextContent('2');
    expect(screen.getByLabelText('Все')).toBeChecked();
    expect(screen.getByLabelText('Не сделано')).not.toBeChecked();
    expect(screen.getByText('Все')).toHaveStyle('color: #96b479');
  });
});
