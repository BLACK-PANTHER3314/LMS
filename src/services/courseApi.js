import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // change to your backend URL
});

// Attach JWT token automatically
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) config.headers.Authorization = `Bearer ${user.token}`;
  return config;
});

// Course APIs
export const getAllCourses = () => API.get("/courses");
export const getCourseById = (id) => API.get(`/courses/${id}`);
export const createCourse = (data) => API.post("/courses", data);
export const enrollCourse = (data) => API.post("/enrollments", data);
export const getMyCourses = () => API.get("/enrollments/my");
export const getProgress = (courseId) => API.get(`/progress/${courseId}`);
