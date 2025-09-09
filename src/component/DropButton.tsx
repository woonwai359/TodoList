import { useCourseStore } from "../store/CounterStore.ts";

interface DropButtonProps {
  code: string;
}

export default function DropButton({ code }: DropButtonProps) {
  const dropCourse = useCourseStore((state) => state.dropCourse);

  return (
    <button
      onClick={() => dropCourse(code)}
      className="bg-red-500 text-white px-2 py-1 rounded"
    >
      ถอน
    </button>
  );
}
