import './index.scss';
import React from 'react';
import TodoItem from 'components/TodoItem';
import Page from 'components/Page';
import { todoList } from 'mock-data';

interface ITodo {
  id: string | number,
  title: string,
  content: string,
  open: boolean
}

const Todos = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([])

  const handleDisplayTodo = (todoId: any, isOpen: boolean) => {
    setTodos(todos.map(item => item.id === todoId ? ({ ...item, open: isOpen }) : item))
  }

  const handleCloseAllTodos = () => {
    setTodos(todos.map(item => ({...item, open: false})))
  }

  React.useEffect(() => {
    setTodos(todoList.map((item) => ({ ...item, open: false })))
  }, [])

  return (
    <Page className='todos'>
      <div className='counter' onClick={handleCloseAllTodos}>{todos.filter(item => item.open).length}</div>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            content={todo.content}
            onOpen={() => handleDisplayTodo(todo.id, true)}
            onClose={() => handleDisplayTodo(todo.id, false)}
            open={todo.open}
          />
        ))}
      </ul>
    </Page>
  )
}

export default Todos