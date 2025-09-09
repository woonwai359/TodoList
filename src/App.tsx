import CounterDec from './component/CounterDec'
import Counterlnc from './component/Counterlnc'
import CounterScore from './component/CounterScore'

import TodoInput from "./component/Todoinput"
import TodoList from "./component/TodoList"

import CourseForm from './component/CourseFrom'
import CourseList from './component/CouseList'
import CourseDrop from './component/CourseDrop'

import './App.css'

export default function App() {
  return (
    <div className="p-6 space-y-8">
      {/* ของเดิม */}
      <div className="border p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Counter</h2>
        <Counterlnc />
        <CounterDec />
        <CounterScore />
      </div>

      {/* TodoList */}
      <div className="border p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Todo List</h2>
        <TodoInput />
        <TodoList />
      </div>
      
      {/* ระบบถอนรายวิชา */}
      <div className="border p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">📚 ระบบถอนรายวิชา</h2>
        <CourseForm />
        <CourseList />
        <CourseDrop />
      </div>
    </div>
  );
}
