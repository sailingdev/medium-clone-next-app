import React from "react";
import AboutPage from "../../components/_pages/About";
import UserLayout from "../../layout/UserLayout";

const Account = () => {
  return <AboutPage />;
};

Account.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <UserLayout
      title="Account"
      description="this is homepage description"
      keywords="this is keywords"
    >
      {page}
    </UserLayout>
  );
};

export default Account;
