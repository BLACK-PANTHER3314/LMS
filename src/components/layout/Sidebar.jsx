import { Drawer, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { useUserStore } from "../../store/userStore";

const navItems = {
  student: [
    { text: "My Courses", path: "/dashboard/student" },
    { text: "Progress", path: "/dashboard/student/progress" },
  ],
  teacher: [
    { text: "My Courses", path: "/dashboard/teacher" },
    { text: "Create Course", path: "/dashboard/teacher/create" },
  ],
  admin: [
    { text: "All Users", path: "/dashboard/admin/users" },
    { text: "All Courses", path: "/dashboard/admin/courses" },
  ],
};

export default function Sidebar() {
  const { user } = useUserStore();
  const links = navItems[user?.role] || [];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <List>
        {links.map((item) => (
          <ListItemButton key={item.text} component={Link} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
