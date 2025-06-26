// Our dummy database has two tables: tasks and users

// Each task has:
// - id
// - title
// - description
// - completed
// - userId

// Each user has:
// - id
// - name

const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    completed: false,
    userId: 1,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    completed: true,
    userId: 2,
  },
];
let nextTaskId = tasks.length + 1;

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];
let nextUserId = users.length + 1;

const Task = {
  findAll: function () {
    return tasks;
  },
  findByPk: function (id) {
    return tasks.find((task) => task.id === id);
  },
  create: function (task) {
    task.id = nextTaskId++;
    tasks.push(task);
    return task;
  },
  update: function (id, task) {
    const index = tasks.findIndex((task) => task.id === id);
    tasks[index] = task;
    return task;
  },
  delete: function (id) {
    tasks = tasks.filter((task) => task.id !== id);
  },
};

const User = {
  findAll: function () {
    return users;
  },
  findByPk: function (id) {
    return users.find((user) => user.id === id);
  },
  create: function (user) {
    user.id = nextUserId++;
    users.push(user);
    return user;
  },
  update: function (id, user) {
    const index = users.findIndex((user) => user.id === id);
    users[index] = user;
    return user;
  },
  delete: function (id) {
    users = users.filter((user) => user.id !== id);
  },
};

module.exports = { Task, User };
