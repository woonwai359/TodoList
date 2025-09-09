import { create } from "zustand";

export interface Todo {
  id: number;
  text: string;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text }],
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useTodoStore;
