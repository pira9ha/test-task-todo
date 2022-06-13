import {FilterItem, TodoListModel} from "./TodoContent";

export type PropsWithList = {
  list: TodoListModel;
};

export type PropsWithFilter = {
  list: TodoListModel;
  filter: FilterItem;
};
