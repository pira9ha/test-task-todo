import { FilterItem, Task, TodoListModel } from "../models/TodoContent";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../models/Status";
import {addToStorage} from "./localStorage.service";

export interface InitialStateModel {
  lists: TodoListModel[];
  filter: FilterItem[];
}

export const initialState: InitialStateModel = {
  lists: [],
  filter: [],
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    getAll: (state, action: PayloadAction<InitialStateModel>) => {
      state.lists = [...state.lists, ...action.payload.lists];
      state.filter = [...state.filter, ...action.payload.filter];
    },
    addList: (state, action: PayloadAction<TodoListModel>) => {
      state.lists = [...state.lists, action.payload];
      state.filter = [
        ...state.filter,
        { listId: action.payload.id, value: Status.All },
      ];
      addToStorage(state);
    },
    updateList: (
      state,
      action: PayloadAction<{ list: TodoListModel; newName: string }>,
    ) => {
      const { list, newName } = action.payload;
      state.lists = state.lists.map((item) => {
        if (item.id === list.id) {
          item.name = newName;
        }
        return item;
      });
      addToStorage(state);
    },
    updateFilter: (
      state,
      action: PayloadAction<{ list: TodoListModel; filter: Status }>,
    ) => {
      const { list, filter } = action.payload;
      state.filter = state.filter.map((filterItem) => {
        if (filterItem.listId === list.id) {
          filterItem.value = filter;
        }
        return filterItem;
      });
      state.lists = state.lists.map((item) => {
        if (item.id === list.id) {
          if (filter === Status.All) {
            item.filteredTasks = [...item.tasks];
          } else {
            item.filteredTasks = item.tasks.filter(
              (task) => task.status === filter,
            );
          }
        }
        return item;
      });
      addToStorage(state);
    },
    deleteList: (state, action: PayloadAction<TodoListModel>) => {
      state.lists = state.lists.filter((item) => item.id !== action.payload.id);
      addToStorage(state);
    },
    addTask: (
      state,
      action: PayloadAction<{ task: Task; list: TodoListModel }>,
    ) => {
      const { list, task } = action.payload;
      const filter = state.filter.find((item) => item.listId === list.id);
      state.lists = state.lists.map((item) => {
        if (item.id === list.id) {
          if (
            filter &&
            (filter.value === Status.All || filter.value === task.status)
          ) {
            return {
              ...item,
              tasks: [...item.tasks, task],
              filteredTasks: [...item.filteredTasks, task],
            };
          }
          return { ...item, tasks: [...item.tasks, task] };
        }
        return item;
      });
      addToStorage(state);
    },
    deleteTask: (
      state,
      action: PayloadAction<{ list: TodoListModel; task: Task }>,
    ) => {
      const { list, task } = action.payload;
      state.lists = state.lists.map((item) => {
        if (item.id === list.id) {
          return {
            ...item,
            tasks: item.tasks.filter((elem) => elem.id !== task.id),
            filteredTasks: item.filteredTasks.filter(
              (elem) => elem.id !== task.id,
            ),
          };
        }
        return item;
      });
      addToStorage(state);
    },
    updateTask: (
      state,
      action: PayloadAction<{ list: TodoListModel; task: Task }>,
    ) => {
      const { list, task } = action.payload;
      const filter = state.filter.find((item) => item.listId === list.id);
      state.lists = state.lists.map((item) => {
        if (item.id === list.id) {
          return {
            ...item,
            tasks: item.tasks.map((elem) => {
              if (elem.id === task.id) {
                return task;
              }
              return elem;
            }),
            filteredTasks:
              filter && filter.value !== Status.All
                ? item.filteredTasks.filter((elem) => elem.id !== task.id)
                : item.filteredTasks.map((elem) => {
                    if (elem.id === task.id) {
                      return task;
                    }
                    return elem;
                  }),
          };
        }
        return item;
      });
      addToStorage(state);
    },
  },
});

export const actions = appStateSlice.actions;
export default appStateSlice.reducer;
