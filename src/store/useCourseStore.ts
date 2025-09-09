import { create } from "zustand";

export interface Course {
  code: string;
  nameTh: string;
  nameEn: string;
  credit: number;
  instructor: string;
  grade: string;
}

interface CourseStore {
  courses: Course[];
  droppedCourses: Course[];
  addCourse: (course: Course) => void;
  dropCourse: (code: string) => void;
  gpa: () => number;
}

// แก้ไขให้ใส่ quotes ทุก key ที่มี + หรือ -
const gradePoint: Record<string, number> = {
  "A": 4,
  "A-": 3.7,
  "B+": 3.3,
  "B": 3,
  "B-": 2.7,
  "C+": 2.3,
  "C": 2,
  "D": 1,
  "F": 0,
};

const useCourseStore = create<CourseStore>((set, get) => ({
  courses: [],
  droppedCourses: [],

  addCourse: (course) => set((state) => ({ courses: [...state.courses, course] })),

  dropCourse: (code) =>
    set((state) => {
      const courseToDrop = get().courses.find((c) => c.code === code);
      if (!courseToDrop) return state;
      return {
        courses: get().courses.filter((c) => c.code !== code),
        droppedCourses: [...get().droppedCourses, courseToDrop],
      };
    }),

  gpa: () => {
    const { courses } = get();
    if (courses.length === 0) return 0;
    let totalPoints = 0, totalCredits = 0;
    courses.forEach((c) => {
      const point = gradePoint[c.grade] ?? 0;
      totalPoints += point * c.credit;
      totalCredits += c.credit;
    });
    return totalCredits === 0 ? 0 : +(totalPoints / totalCredits).toFixed(2);
  },
}));

export default useCourseStore;
