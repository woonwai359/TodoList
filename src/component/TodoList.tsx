import useTodoStore from "../store/useTodoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) {
    return <p className="text-gray-500">ยังไม่มีงาน</p>;
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
