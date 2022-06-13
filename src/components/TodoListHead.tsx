import { CustomCheckbox } from "./styled/common/CustomCheckbox";
import { ListDisclosure, ListName, ListTitle } from "./styled/ListTitle";
import React, { FC, useState } from "react";
import { Form } from "./editors/Form";
import { TodoListModel } from "../models/TodoContent";
import { HoveredContainer, HoverEdit } from "./styled/HoverButtons";
import {useDispatch} from "react-redux";
import {actions} from "../helper/appStateSlice";

type TodoListHeadProps = {
  callback: () => void;
  list: TodoListModel;
};

export const TodoListHead: FC<TodoListHeadProps> = ({ callback, list }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const listId = `list_${list.id}`;

  return (
    <ListTitle>
      <CustomCheckbox name="disclosure" id={listId} onClick={callback} />
      <ListDisclosure htmlFor={listId} />
        {isEdit ? (
            <Form
              editTitle={true}
              value={list.name}
              reset={() => setIsEdit(false)}
              submit={(value) => {
                dispatch(actions.updateList({ list, newName: value }));
              }}
            />
          ) : (
            <>
              <ListName onClick={() => setIsEdit(true)}>{list.name}</ListName>
              <HoveredContainer>
                <HoverEdit
                  onClick={() => dispatch(actions.deleteList(list))}
                  content={"\\2716"}
                />
              </HoveredContainer>
            </>
          )
        }
    </ListTitle>
  );
};
