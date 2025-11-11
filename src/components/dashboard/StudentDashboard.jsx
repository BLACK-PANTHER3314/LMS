import { Typography, Card, CardContent, Grid } from "@mui/material";

export default function StudentDashboard() {
  return (
    <>
      <Typography variant="h4" mb={3}>My Courses</Typography>
      <Grid container spacing={2}>
        {[1, 2, 3].map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course}>
            <Card>
              <CardContent>
                <Typography variant="h6">Course {course}</Typography>
                <Typography color="text.secondary">Progress: 60%</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
