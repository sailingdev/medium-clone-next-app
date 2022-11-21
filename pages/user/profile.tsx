import React from "react";
import ProfilePage from "../../components/_pages/Profile";
import UserLayout from "../../layout/UserLayout";

const Profile = () => {
  return <ProfilePage />;
};

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <UserLayout
      title="Profile"
      description="this is homepage description"
      keywords="this is keywords"
    >
      {page}
    </UserLayout>
  );
};

export default Profile;
