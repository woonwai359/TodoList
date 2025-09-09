import useCourseStore from "../store/useCourseStore";
import DropButton from "./DropButton";

export default function CourseList() {
  const courses = useCourseStore((state) => state.courses);
  const gpa = useCourseStore((state) => state.gpa)();

  return (
    <div className="border p-4 rounded space-y-2">
      <h3 className="font-bold">รายวิชาที่ลงทะเบียน</h3>
      {courses.length === 0 && <p>ยังไม่มีรายวิชา</p>}
      {courses.map((course) => (
        <div key={course.code} className="flex justify-between items-center bg-gray-100 p-2 rounded">
          <div>
            {course.code} - {course.nameTh} ({course.credit} หน่วยกิต) เกรด: {course.grade}
          </div>
          <DropButton code={course.code}/>
        </div>
      ))}
      <p className="mt-2 font-bold">GPA รวม: {gpa}</p>
    </div>
  );
}
