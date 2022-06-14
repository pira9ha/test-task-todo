import reducer, { actions } from "../stateWorker/appStateSlice";
import {
  initialEmptyStateMock,
  initialStateData,
  simpleListMock,
  simpleListRenameStateMock,
  simpleListStateMock,
} from "./mocks";

test("should return default state", () => {
  // @ts-ignore
  expect(reducer(undefined, {})).toEqual(initialStateData());
});

test("should add new list to state", () => {
  const initialState = initialEmptyStateMock();
  expect(reducer(initialState, actions.addList(simpleListMock()))).toEqual(
    simpleListStateMock(),
  );
});

test("should update list", () => {
  const initialState = simpleListStateMock();
  expect(
    reducer(
      initialState,
      actions.updateList({
        list: simpleListMock(),
        newName: "old list",
      }),
    ),
  ).toEqual(simpleListRenameStateMock());
});

test("should delete list", () => {
  const initialState = simpleListStateMock();
  expect(reducer(initialState, actions.deleteList(simpleListMock()))).toEqual(
    initialEmptyStateMock(),
  );
});
