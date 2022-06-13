import React from "react";
import "./App.css";
import { Headline } from "./components/styled/common/Headline";
import { TodoTable } from "./components/TodoTable";
import { CreateNewList } from "./components/editors/CreateNewList";
import { useSelector } from "react-redux";
import {RootState} from "./helper/store";

function App() {
  const { lists, filter } = useSelector((state: RootState) => state.appState);

  return (
    <main className="App">
      <Headline className="App-header">todos</Headline>
      {lists &&
        lists.map((list) => (
          <TodoTable
            key={list.id}
            list={list}
            filter={filter.find((item) => item.listId === list.id)!}
          />
        ))}
      <CreateNewList />
    </main>
  );
}

export default App;
