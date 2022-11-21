import React from "react";
import AboutPage from "../../components/_pages/About";
import UserLayout from "../../layout/UserLayout";

const Profile = () => {
  return <AboutPage />;
};

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <UserLayout
      title="Password"
      description="this is homepage description"
      keywords="this is keywords"
    >
      {page}
    </UserLayout>
  );
};

export default Profile;
