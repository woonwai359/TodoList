import { create } from "zustand";

interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  dropCourse: (code: string) => void; // เพิ่มตรงนี้
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  dropCourse: (code: string) => {
    console.log("Dropping course:", code);
    // logic ถอนรายวิชา
  },
}));
