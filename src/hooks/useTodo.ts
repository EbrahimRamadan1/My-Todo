import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { dummyData } from "./../data/todo";

export default function useTodo() {
  const [todos, setTodos] = useState(() => {
    const storedTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    return storedTodos.length > 0 ? storedTodos : dummyData;
  });

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodo(title: string) {
    setTodos((prevTodo) => [
      {
        id: Date.now(),
        title,
        completed: false,
      },
      ...prevTodo,
    ]);
  }

  function deteltItem(id: number) {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  }

  function deleteAllCompletedTodos() {
    setTodos((prevTodo) => prevTodo.filter((todo) => !todo.completed));
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    setTodoCompleted,
    addTodo,
    deteltItem,
    deleteAllCompletedTodos,
  };
}
