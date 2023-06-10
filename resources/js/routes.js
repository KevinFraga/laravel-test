const Welcome = () => import('../views/Welcome.vue');
const TaskList = () => import('../views/Tasks/List.vue');
const TaskEdit = () => import('../views/Tasks/Edit.vue');
const TaskCreate = () => import('../views/Tasks/Create.vue');

export const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/tasks',
    name: 'taskList',
    component: TaskList
  },
  {
    path: '/tasks/create',
    name: 'taskCreate',
    component: TaskCreate
  },
  {
    path: '/tasks/:id/edit',
    name: 'taskEdit',
    component: TaskEdit
  }
]
