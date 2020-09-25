import { useState, useEffect } from 'react';
import { fetchTodos } from 'api/todos';
import type { Todo } from 'mock-data';

type TodoObj = Todo & { open: boolean }
type TodosObj = {
  [k: string]: TodoObj
}

export const useTodoList = () => {
  const [todos, setTodos] = useState<TodosObj>({})
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const getTodos = async () => {
      const todoItems = await fetchTodos();
      const todoItemsObj = todoItems.reduce((result: TodosObj, todo: Todo) => {
        if (!result.hasOwnProperty(todo.id)) {
          result[todo.id] = { ...todo, open: false }
        }
        return result
      }, {})
      setTodos(todoItemsObj)
    }

    getTodos();
  }, [])

  return {
    todos,
    counter,
    onToggleTodo: (todoId: string, isOpen: boolean) => {
      let currentTodo: TodoObj = todos[todoId]
      if (currentTodo) {
        setTodos({
          ...todos,
          [todoId]: { ...currentTodo, open: isOpen }
        })
        isOpen ? setCounter(counter + 1) : setCounter(counter - 1)
      }
    },
    onCloseAll: () => {
      let newTodos: TodosObj = {}
      for (let todoId in todos) {
        newTodos[todoId] = { ...todos[todoId], open: false }
      }
      setTodos(newTodos)
      setCounter(0)
    }
  }
}
