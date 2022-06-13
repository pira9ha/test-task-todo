import React, {useEffect, useRef} from "react";
import "./App.css";
import { Headline } from "./components/styled/common/Headline";
import { TodoTable } from "./components/TodoTable";
import { CreateNewList } from "./components/editors/CreateNewList";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./stateWorker/store";
import {getFromStorage} from "./stateWorker/localStorage.service";
import {actions} from "./stateWorker/appStateSlice";

function App() {
  const state = useSelector((state: RootState) => state.appState);
  const isMounted = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isMounted.current) {
      return;
    }
    const stateFromStorage = getFromStorage();
    if(stateFromStorage) {
      dispatch(actions.getAll(stateFromStorage));
    }
    isMounted.current = true;
  }, []);

  return (
    <main className="App">
      <Headline className="App-header">todos</Headline>
      {state.lists &&
        state.lists.map((list) => (
          <TodoTable
            key={list.id}
            list={list}
            filter={state.filter.find((item) => item.listId === list.id)!}
          />
        ))}
      <CreateNewList />
    </main>
  );
}

export default App;
