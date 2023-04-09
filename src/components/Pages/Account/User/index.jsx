import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AccountLayout } from "../../../Layouts/AccountLayout/AccountLayout";
import { UserContent } from "./UserContent";
import { UserSidebar } from "./UserSidebar";
import { UserTabHeader } from "./UserTabHeader/UserTabHeader";

export const User = () => {
  const { person } = useSelector((s) => s);

  if (!person) {
    return <Navigate to="/" replace />;
  }

  return (
    <AccountLayout
      tabs={<UserSidebar />}
      tabHeader={<UserTabHeader />}
      content={<UserContent />}
    />
  );
};
