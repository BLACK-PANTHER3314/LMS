import { useEffect, useState } from "react";
import { Box, Spinner, SimpleGrid } from "@chakra-ui/react";
import { getMyCourses, getProgress } from "../../services/courseApi";
import CourseCard from "../../components/CourseCard";
import ProgressBar from "../../components/ProgressBar";

const MyCourses = () => {
  const [enrolled, setEnrolled] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyCourses()
      .then(async (res) => {
        const courses = await Promise.all(
          res.data.map(async (c) => {
            const progressRes = await getProgress(c.course._id);
            return { ...c.course, progress: progressRes.data.progress || 0 };
          })
        );
        setEnrolled(courses);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box p={6}>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {enrolled.map((c) => (
            <Box key={c._id}>
              <CourseCard course={c} />
              <ProgressBar progress={c.progress} />
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default MyCourses;
