import './index.scss';
import React from 'react';
import TodoItem from 'components/TodoItem';
import Page from 'components/Page';
import { useTodoList } from 'hooks/useTodoList';

const Todos = () => {
  const { todos, counter, onToggleTodo, onCloseAll } = useTodoList();
  const todoIds = Object.keys(todos)
  return (
    <Page className='todos'>
      <div className='counter' onClick={onCloseAll}>{counter}</div>
      <ul className='todo-list'>
        {todoIds.map((todoId) => (
          <TodoItem
            key={todoId}
            title={todos[todoId].title}
            content={todos[todoId].content}
            onOpen={() => onToggleTodo(todoId, true)}
            onClose={() => onToggleTodo(todoId, false)}
            open={todos[todoId].open}
          />
        ))}
      </ul>
    </Page>
  )
}

export default Todos