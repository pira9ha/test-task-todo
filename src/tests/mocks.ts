import {Status} from "../models/Status";

export const simpleListMock = () => ({
  id: "1",
  name: "new list",
  tasks: [],
  filteredTasks: [],
});

export const listForUiTest = () => ({
  id: '1',
  name: 'Первый список, который можно отредактировать. Просто нажми на меня!',
  tasks: [
    {
      id: '1',
      name: 'Задача, которую надо выполнить.',
      status: Status.Undone,
    },
    {
      id: '2',
      name: 'Выполненная задача.',
      status: Status.Done,
    },
  ],
  filteredTasks: [
    {
      id: '1',
      name: 'Задача, которую надо выполнить.',
      status: Status.Undone,
    },
    {
      id: '2',
      name: 'Выполненная задача.',
      status: Status.Done,
    },
  ],
});

export const initialEmptyStateMock = () => ({
  lists: [],
  filter: [],
});

export const simpleListStateMock = () => ({
  lists: [
    {
      id: "1",
      name: "new list",
      tasks: [],
      filteredTasks: [],
    },
  ],
  filter: [
    {
      listId: "1",
      value: Status.All,
    },
  ],
});

export const simpleListRenameStateMock = () => ({
  lists: [
    {
      id: "1",
      name: "old list",
      tasks: [],
      filteredTasks: [],
    },
  ],
  filter: [
    {
      listId: "1",
      value: Status.All,
    },
  ],
});

export const firstSimpleTask = () => ({
      id: "1",
      name: "first task",
      status: Status.Done,
    });

export const secondSimpleTask = () => ({
      id: "2",
      name: "second task",
      status: Status.Undone,
    });

export const listWithOneTaskStateMock = () => ({
  lists: [
    {
      id: "1",
      name: "new list",
      tasks: [
        firstSimpleTask(),
      ],
      filteredTasks: [
        firstSimpleTask(),
      ],
    },
  ],
  filter: [
    {
      listId: "1",
      value: Status.All,
    },
  ],
});

export const listWithTwoTasksStateMock = () => ({
  lists: [
    {
      id: "1",
      name: "new list",
      tasks: [
        firstSimpleTask(),
        secondSimpleTask(),
      ],
      filteredTasks: [
        firstSimpleTask(),
        secondSimpleTask(),
      ],
    },
  ],
  filter: [
    {
      listId: "1",
      value: Status.All,
    },
  ],
});

export const renamedTask = () => ({
  id: "1",
  name: "new task name",
  status: Status.Done,
});

export const newStatusTask = () => ({
  id: "2",
  name: "second task",
  status: Status.Done,
});

export const listWithRenamedTaskStateMock = () => ({
  lists: [
    {
      id: "1",
      name: "new list",
      tasks: [
        renamedTask(),
        secondSimpleTask(),
      ],
      filteredTasks: [
        firstSimpleTask(),
        secondSimpleTask(),
      ],
    },
  ],
  filter: [
    {
      listId: "1",
      value: Status.All,
    },
  ],
});

export const listWithNewStatusTaskStateMock = () => ({
  lists: [
    {
      id: "1",
      name: "new list",
      tasks: [
        renamedTask(),
        newStatusTask(),
      ],
      filteredTasks: [
        firstSimpleTask(),
        secondSimpleTask(),
      ],
    },
  ],
  filter: [
    {
      listId: "1",
      value: Status.All,
    },
  ],
});

export const listWithNewFilterStateMock = () => ({
  lists: [
    {
      id: "1",
      name: "new list",
      tasks: [
        firstSimpleTask(),
        secondSimpleTask(),
      ],
      filteredTasks: [
        firstSimpleTask(),
      ],
    },
  ],
  filter: [
    {
      listId: "1",
      value: Status.Done,
    },
  ],
});

export const anotherListWithNewFilterStateMock = () => ({
  lists: [
    {
      id: "1",
      name: "new list",
      tasks: [
        firstSimpleTask(),
        newStatusTask(),
      ],
      filteredTasks: [
        firstSimpleTask(),
        newStatusTask(),
      ],
    },
  ],
  filter: [
    {
      listId: "1",
      value: Status.Done,
    },
  ],
});

export const initialStateData = () => ({
  lists: [
    {
      id: '1',
      name: 'Первый список, который можно отредактировать. Просто нажми на меня!',
      tasks: [
        {
          id: '1',
          name: 'Задача, которую надо выполнить.',
          status: Status.Undone,
        },
        {
          id: '2',
          name: 'Выполненная задача.',
          status: Status.Done,
        },
      ],
      filteredTasks: [
        {
          id: '1',
          name: 'Задача, которую надо выполнить.',
          status: Status.Undone,
        },
        {
          id: '2',
          name: 'Выполненная задача.',
          status: Status.Done,
        },
      ],
    },
  ],
  filter: [
    {
      listId: '1',
      value: Status.All,
    },
  ],
});
