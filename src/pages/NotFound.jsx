import { Container, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Container sx={{ textAlign: "center", mt: 20 }}>
      <Typography variant="h4">404 | Page Not Found</Typography>
    </Container>
  );
}
