import React, { useState } from "react";
import { Form } from "./Form";
import { NewTodo } from "../styled/TodoList";
import { useDispatch } from "react-redux";
import {actions} from "../../stateWorker/appStateSlice";
import uniqueId from "lodash.uniqueid";

export const CreateNewList = () => {
  const [createList, setCreateList] = useState(false);
  const randomNum = Math.random();
  const dispatch = useDispatch();

  return createList ? (
    <Form
      createList={true}
      submit={(value) => {
        const list = {
          id: uniqueId(`list_${randomNum}`),
          name: value,
          tasks: [],
          filteredTasks: [],
        };
        dispatch(actions.addList(list));
      }}
      reset={() => setCreateList(false)}
    />
  ) : (
    <NewTodo data-new-list="button" onClick={() => setCreateList(true)}>
      Создать новый список задач
    </NewTodo>
  );
};
