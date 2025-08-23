import { useSelector } from "react-redux";
import AdminDashboard from "../pages/adminDashboard";
import UserDashboard from "../pages/UserDashboard";

function Dashboard() {
  const { role } = useSelector((state) => state.auth);

  return (
    <div>
      {role === "admin" ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )}
    </div>
  );
}

export default Dashboard;