import React, { useState } from "react";
import { Form } from "./Form";
import { NewTodo } from "../styled/TodoList";
import { useDispatch } from "react-redux";
import {actions} from "../../helper/appStateSlice";
import uniqueId from "lodash.uniqueid";

export const CreateNewList = () => {
  const [createList, setCreateList] = useState(false);
  const dispatch = useDispatch();

  return createList ? (
    <Form
      createList={true}
      submit={(value) => {
        const list = {
          id: uniqueId(`list_`),
          name: value,
          tasks: [],
          filteredTasks: [],
        };
        dispatch(actions.addList(list));
      }}
      reset={() => setCreateList(false)}
    />
  ) : (
    <NewTodo onClick={() => setCreateList(true)}>
      Создать новый список задач
    </NewTodo>
  );
};
