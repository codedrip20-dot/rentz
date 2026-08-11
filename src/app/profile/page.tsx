import ProfilePage from "@/routes/profilePage";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const Profile = () => {
  return (
    <ProtectedRoute>
      <ProfilePage />
    </ProtectedRoute>
  );
};

export default Profile;