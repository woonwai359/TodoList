import { useState } from "react";
import useTodoStore from "../store/useTodoStore";

export default function TodoInput() {
  const [value, setValue] = useState<string>("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        className="border p-2 rounded w-full"
        placeholder="เพิ่มงานใหม่..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        เพิ่ม
      </button>
    </form>
  );
}
