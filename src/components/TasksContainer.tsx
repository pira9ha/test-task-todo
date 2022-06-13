import { ListItem } from "./ListItem";
import { TodoListContent } from "./styled/TodoList";
import React, { FC } from "react";
import {TodoListModel} from "../models/TodoContent";
import { CreateNewTask } from "./editors/CreateNewTask";

type TasksContainerProps = {
  openFlag: boolean;
  list: TodoListModel;
};

export const TasksContainer: FC<TasksContainerProps> = ({ openFlag, list }) => {
  return (
    <TodoListContent isOpen={openFlag}>
      {list.filteredTasks &&
        list.filteredTasks.map((task) => <ListItem key={task.id} task={task} list={list} />)}
      <CreateNewTask list={list} />
    </TodoListContent>
  );
};
