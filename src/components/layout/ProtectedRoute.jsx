import { Navigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";

export default function ProtectedRoute({ children, roles }) {
  const { user, token } = useUserStore();

  if (!token || !user) return <Navigate to="/login" />;

  // Role-based restriction
  if (roles && !roles.includes(user.role)) return <Navigate to="/" />;

  return children;
}
