import useTodoStore from "../store/useTodoStore";
import * as TodoStore from "../store/useTodoStore"; 
type Todo = TodoStore.Todo;                 

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded">
      <span>{todo.text}</span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        ลบ
      </button>
    </li>
  );
}
