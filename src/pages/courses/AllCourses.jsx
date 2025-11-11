import { SimpleGrid, Spinner, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import useCourseStore from "../../store/courseStore";
import CourseCard from "../../components/CourseCard";

const AllCourses = () => {
  const { fetchCourses, courses, loading } = useCourseStore();

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Box p={6}>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default AllCourses;
