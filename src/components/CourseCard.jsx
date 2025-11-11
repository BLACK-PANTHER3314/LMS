import { Box, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
    >
      <Image
        src={course.thumbnail || "https://via.placeholder.com/300x150"}
        alt={course.title}
        borderRadius="md"
      />
      <Text fontSize="xl" fontWeight="bold" mt={2}>
        {course.title}
      </Text>
      <Text fontSize="sm" color="gray.600" noOfLines={2}>
        {course.description}
      </Text>
      <Link to={`/courses/${course._id}`}>
        <Button mt={3} colorScheme="blue" width="full">
          View Details
        </Button>
      </Link>
    </Box>
  );
};

export default CourseCard;
