// src/components/Dashboard.js
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const DashboardHeader = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      {/* Other dashboard content */}
    </div>
  );
};

export default DashboardHeader;
