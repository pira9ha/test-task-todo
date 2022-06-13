import { Status } from "./Status";

export interface Task {
  id: string;
  name: string;
  status: Status;
}

export interface TodoListModel {
  id: string;
  name: string;
  tasks: Task[];
  filteredTasks: Task[];
}

export type FilterItem = { listId: string; value: Status };
