import { create } from "zustand";
import * as api from "../services/courseApi";

const useCourseStore = create((set) => ({
  courses: [],
  myCourses: [],
  loading: false,

  fetchCourses: async () => {
    set({ loading: true });
    const { data } = await api.getAllCourses();
    set({ courses: data, loading: false });
  },

  fetchMyCourses: async () => {
    set({ loading: true });
    const { data } = await api.getMyCourses();
    set({ myCourses: data, loading: false });
  },
}));

export default useCourseStore;
