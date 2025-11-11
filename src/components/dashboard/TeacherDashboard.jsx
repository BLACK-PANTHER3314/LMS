import { Typography, Button, Card, CardContent } from "@mui/material";

export default function TeacherDashboard() {
  return (
    <>
      <Typography variant="h4" mb={3}>My Courses</Typography>
      {[1, 2].map((course) => (
        <Card key={course} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">Course {course}</Typography>
            <Typography color="text.secondary">Enrolled: 25 students</Typography>
          </CardContent>
        </Card>
      ))}
      <Button variant="contained">Create New Course</Button>
    </>
  );
}
