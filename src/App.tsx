import CounterDec from './component/CounterDec';
import Counterlnc from './component/Counterlnc';

import TodoInput from "./component/Todoinput";
import TodoList from "./component/TodoList";

import './App.css';

export default function App() {
  return (
    <div className="p-6 space-y-8">
      {/* Counter */}
      <div className="border p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Counter</h2>
        <div className="flex gap-2 items-center">
          <Counterlnc />
          <CounterDec />
        </div>
      </div>

      {/* Todo List */}
      <div className="border p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Todo List</h2>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  )
}
