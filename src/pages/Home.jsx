import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Welcome to LMS
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Learn. Teach. Manage — all in one place.
      </Typography>
      <Button variant="contained" component={Link} to="/login">
        Get Started
      </Button>
    </Container>
  );
}
