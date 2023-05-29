import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AccountLayout } from "../../../Layouts/AccountLayout/AccountLayout";
import { UserSidebar } from "./UserSidebar";
import { USER } from "../../../../utils/constants";
import { AccountHeader } from "../AccountHeader";
import { AccountContent } from "../AccountContent";

export const User = () => {
  const { person } = useSelector((s) => s);

  if (!person && !localStorage.getItem(USER)) {
    return <Navigate to="/" replace />;
  }

  return (
    <AccountLayout
      tabs={<UserSidebar />}
      tabHeader={<AccountHeader />}
      content={<AccountContent />}
    />
  );
};
