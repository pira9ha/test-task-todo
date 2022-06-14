import reducer, { actions } from "../stateWorker/appStateSlice";
import {
  firstSimpleTask,
  listWithNewFilterStateMock,
  listWithNewStatusTaskStateMock,
  listWithOneTaskStateMock,
  listWithRenamedTaskStateMock,
  listWithTwoTasksStateMock,
  newStatusTask,
  renamedTask,
  secondSimpleTask,
  simpleListMock,
  simpleListStateMock,
} from "./mocks";
import { Status } from "../models/Status";

test("should add new task to state", () => {
  const initialState = simpleListStateMock();
  expect(
    reducer(
      initialState,
      actions.addTask({ task: firstSimpleTask(), list: simpleListMock() }),
    ),
  ).toEqual(listWithOneTaskStateMock());
});

test("should delete task from state", () => {
  const initialState = listWithTwoTasksStateMock();
  expect(
    reducer(
      initialState,
      actions.deleteTask({ task: secondSimpleTask(), list: simpleListMock() }),
    ),
  ).toEqual(listWithOneTaskStateMock());
});

test("should update name task", () => {
  const initialState = listWithTwoTasksStateMock();
  expect(
    reducer(
      initialState,
      actions.updateTask({ task: renamedTask(), list: simpleListMock() }),
    ),
  ).toEqual(listWithRenamedTaskStateMock());
});

test("should update status task", () => {
  const initialState = listWithRenamedTaskStateMock();
  expect(
    reducer(
      initialState,
      actions.updateTask({ task: newStatusTask(), list: simpleListMock() }),
    ),
  ).toEqual(listWithNewStatusTaskStateMock());
});

test("should update filter and update filtered tasks in list", () => {
  const initialState = listWithTwoTasksStateMock();
  expect(
    reducer(
      initialState,
      actions.updateFilter({ filter: Status.Done, list: simpleListMock() }),
    ),
  ).toEqual(listWithNewFilterStateMock());
});
