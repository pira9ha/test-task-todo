import { TodoListHead } from "./TodoListHead";
import { TasksContainer } from "./TasksContainer";
import { TodoList } from "./styled/TodoList";
import React, { FC, useState } from "react";
import {PropsWithFilter} from "../models/Props";
import {FilterPanel} from "./FilterPanel";

export const TodoTable: FC<PropsWithFilter> = ({ list, filter }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TodoList>
      <TodoListHead list={list} callback={() => setIsOpen(!isOpen)} />
      <TasksContainer
        list={list}
        openFlag={isOpen}
      />
      <FilterPanel list={list} filter={filter}/>
    </TodoList>
  );
};
