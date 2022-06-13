import { TodoChecker, TodoItem } from "./styled/TodoList";
import { CustomCheckbox } from "./styled/common/CustomCheckbox";
import React, { FC, useState } from "react";
import { Task, TodoListModel } from "../models/TodoContent";
import { Status } from "../models/Status";
import { HoveredContainer, HoverEdit } from "./styled/HoverButtons";
import { Form } from "./editors/Form";
import { useDispatch } from "react-redux";
import { actions } from "../helper/appStateSlice";

type ListItemProps = {
  task: Task;
  list: TodoListModel;
};

export const ListItem: FC<ListItemProps> = ({ task, list }) => {
  const [editTask, setEditTask] = useState(false);
  const dispatch = useDispatch();
  const taskId = `task_${task.id}`;

  return !editTask ? (
    <TodoItem status={task.status}>
      <TodoChecker htmlFor={taskId} status={task.status}>
        <CustomCheckbox
          name="disclosure"
          id={taskId}
          onClick={() => {
            const status =
              task.status === Status.Done ? Status.Undone : Status.Done;
            dispatch(
              actions.updateTaskStatus({
                list,
                task,
                status,
              }),
            );
          }}
        />
      </TodoChecker>
      {task.name}
      <HoveredContainer>
        <HoverEdit onClick={() => setEditTask(true)} content={"\\2710"} />
        <HoverEdit onClick={() => dispatch(actions.deleteTask({task, list}))} content={"\\2716"} />
      </HoveredContainer>
    </TodoItem>
  ) : (
    <Form
      value={task.name}
      submit={(value) => dispatch(actions.updateTask({
        list,
        task,
        newName: value,
      }))}
      reset={() => setEditTask(false)}
    />
  );
};
