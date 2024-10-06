export * from './queryKey';
export * from './Router';
export const API_ROOT = '';
export const TIMEOUT = 30000;
export const DEBUG = process.env.NODE_ENV !== 'production';
export const API = {
  GET_TASK_LIST: '/api/get-tasks',
  CREATE_TASK: '/api/create-tasks',
};
export const STATUS = {
  ALL: 'All',
  COMPLETED: 'Completed',
  INCOMPLETE: 'Incomplete',
};
export const TASK_STATUS_FILTER = [
  STATUS.ALL,
  STATUS.COMPLETED,
  STATUS.INCOMPLETE,
];
