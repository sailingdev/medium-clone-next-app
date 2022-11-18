import React from "react";
import ProfilePage from "../components/_pages/Profile";
import MainLayout from "../layout/MainLayout";

const Profile = () => {
  return <ProfilePage />;
};

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout
      title="Home"
      description="this is homepage description"
      keywords="this is keywords"
    >
      {page}
    </MainLayout>
  );
};

export default Profile;
