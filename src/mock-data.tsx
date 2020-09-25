import { uuid } from 'uuidv4';

export type Todo = {
  id: string,
  title: string,
  content: string
}

export const todoList: Todo[] = [
  { id: uuid(), title: 'aghuyg', content: 'bafouazhg'},
  { id: uuid(), title: 'gzrhteyj', content: 'bafouazhg'},
  { id: uuid(), title: 'aghagzrhzthuyg', content: 'bafouazhg'}
]
