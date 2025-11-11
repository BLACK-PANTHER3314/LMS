import { Typography, Card, CardContent, Grid } from "@mui/material";

export default function AdminDashboard() {
  return (
    <>
      <Typography variant="h4" mb={3}>Admin Overview</Typography>
      <Grid container spacing={2}>
        {[
          { title: "Total Users", value: 120 },
          { title: "Total Courses", value: 45 },
          { title: "Active Enrollments", value: 320 },
        ].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="h5" color="primary">{item.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
