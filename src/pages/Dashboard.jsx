import { Box, Toolbar } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/SideBar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet /> {/* Nested Routes Render Here */}
      </Box>
    </Box>
  );
}
