import { todoList } from 'mock-data';
import type { Todo } from 'mock-data';

export const fetchTodos = () => {
  return new Promise<Todo[]>((resolve) => {
    setTimeout(() => {
      resolve(todoList);
    }, 500);
  });
};
