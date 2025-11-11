// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Box, Text, Button, Spinner} from "@chakra-ui/react";
// import { useToast } from "@chakra-ui/react";




// import { getCourseById, enrollCourse } from "../../services/courseApi";

// const CourseDetail = () => {
//   const { id } = useParams();
//   const toast = useToast();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getCourseById(id)
//       .then((res) => setCourse(res.data))
//       .finally(() => setLoading(false));
//   }, [id]);

//   const handleEnroll = async () => {
//     try {
//       await enrollCourse({ courseId: id });
//       toast({
//         title: "Enrollment successful!",
//         status: "success",
//         position: "top",
//       });
//     } catch (err) {
//       toast({
//         title: "You are already enrolled or unauthorized",
//         status: "error",
//         position: "top",
//       });
//     }
//   };

//   if (loading) return <Spinner size="xl" />;

//   return (
//     <Box p={6}>
//       <Text fontSize="3xl" fontWeight="bold">
//         {course.title}
//       </Text>
//       <Text color="gray.600" my={3}>
//         {course.description}
//       </Text>
//       <Button colorScheme="teal" onClick={handleEnroll}>
//         Enroll Now
//       </Button>
//     </Box>
//   );
// };

// export default CourseDetail;





import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Text, Button, Spinner, Alert, AlertIcon } from "@chakra-ui/react";

import { getCourseById, enrollCourse } from "../../services/courseApi";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrollMessage, setEnrollMessage] = useState(null);

  useEffect(() => {
    getCourseById(id)
      .then((res) => {
        setCourse(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || "Failed to load course");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleEnroll = async () => {
    try {
      await enrollCourse({ courseId: id });
      setEnrollMessage("Enrollment successful!");
      setTimeout(() => setEnrollMessage(null), 3000);
    } catch (err) {
      setError("You are already enrolled or unauthorized");
      setTimeout(() => setError(null), 3000);
    }
  };

  if (loading) return <Spinner size="xl" />;

  if (error) {
    return (
      <Alert status="error" m={6}>
        <AlertIcon />
        {error}
      </Alert>
    );
  }

  if (!course) {
    return (
      <Alert status="warning" m={6}>
        <AlertIcon />
        Course not found
      </Alert>
    );
  }

  return (
    <Box p={6}>
      {enrollMessage && (
        <Alert status="success" mb={4}>
          <AlertIcon />
          {enrollMessage}
        </Alert>
      )}
      <Text fontSize="3xl" fontWeight="bold">
        {course.title}
      </Text>
      <Text color="gray.600" my={2}>
        <strong>Teacher:</strong> {course.teacher?.name || "N/A"}
      </Text>
      <Text color="gray.600" my={2}>
        <strong>Category:</strong> {course.category || "N/A"}
      </Text>
      <Text color="gray.600" my={3}>
        {course.description}
      </Text>
      <Text color="gray.500" my={2}>
        <strong>Duration:</strong> {course.duration || "N/A"}
      </Text>
      <Button colorScheme="teal" onClick={handleEnroll} mt={4}>
        Enroll Now
      </Button>
    </Box>
  );
};

export default CourseDetail;