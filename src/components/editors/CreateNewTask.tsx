import { Form } from "./Form";
import { NewItem } from "../styled/TodoList";
import React, { FC, useState } from "react";
import {useDispatch} from "react-redux";
import {actions} from "../../stateWorker/appStateSlice";
import {PropsWithList} from "../../models/Props";
import uniqueId from "lodash.uniqueid";
import {Status} from "../../models/Status";

export const CreateNewTask: FC<PropsWithList> = ({ list }) => {
  const [createTask, setCreateTask] = useState(false);
  const randomNum = Math.random();
  const dispatch = useDispatch();

  return createTask ? (
    <Form
      submit={(value) => {
        const task = {
          id: uniqueId(`task_${randomNum}`),
          name: value,
          status: Status.Undone,
        };
        dispatch(actions.addTask({list, task}));
      }}
      reset={() => setCreateTask(false)}
    />
  ) : (
    <NewItem onClick={() => setCreateTask(true)}>Добавить задачу</NewItem>
  );
};
