import useCourseStore from "../store/useCourseStore";

export default function CourseDrop() {
  const dropped = useCourseStore((state) => state.droppedCourses);

  return (
    <div className="border p-4 rounded space-y-2">
      <h3 className="font-bold">รายวิชาที่ถอนแล้ว</h3>
      {dropped.length === 0 && <p>ยังไม่มีรายวิชา</p>}
      {dropped.map((c) => (
        <div key={c.code} className="bg-gray-200 p-2 rounded">
          {c.code} - {c.nameTh} ({c.credit} หน่วยกิต)
        </div>
      ))}
    </div>
  );
}
