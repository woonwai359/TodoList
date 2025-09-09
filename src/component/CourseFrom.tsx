import { useState } from "react";
import useCourseStore from "../store/useCourseStore";

export default function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse);

  const [code, setCode] = useState("");
  const [nameTh, setNameTh] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [credit, setCredit] = useState<number>(0);
  const [instructor, setInstructor] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!code || !nameTh || !credit || !grade) return;
    addCourse({ code, nameTh, nameEn, credit, instructor, grade });
    setCode(""); setNameTh(""); setNameEn(""); setCredit(0); setInstructor(""); setGrade("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 border p-4 rounded">
      <div className="flex gap-2">
        <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="รหัสวิชา" className="border p-1 rounded"/>
        <input value={nameTh} onChange={(e) => setNameTh(e.target.value)} placeholder="ชื่อวิชา(ไทย)" className="border p-1 rounded"/>
        <input value={nameEn} onChange={(e) => setNameEn(e.target.value)} placeholder="ชื่อวิชา(อังกฤษ)" className="border p-1 rounded"/>
      </div>
      <div className="flex gap-2">
        <input type="number" value={credit} onChange={(e) => setCredit(Number(e.target.value))} placeholder="หน่วยกิต" className="border p-1 rounded"/>
        <input value={instructor} onChange={(e) => setInstructor(e.target.value)} placeholder="อาจารย์" className="border p-1 rounded"/>
        <input value={grade} onChange={(e) => setGrade(e.target.value)} placeholder="เกรด" className="border p-1 rounded"/>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">เพิ่มรายวิชา</button>
    </form>
  );
}
