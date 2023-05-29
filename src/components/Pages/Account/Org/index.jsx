import { AccountLayout } from "../../../Layouts/AccountLayout/AccountLayout";
import { PartnerSidebar } from "../Partner/ParnerSidebar";
import { UserTabHeader } from "../User/UserTabHeader/UserTabHeader";
import { OrgContent } from "./OrgContent";

export const Org = () => {
  return (
    <AccountLayout
      tabs={<PartnerSidebar />}
      tabHeader={<UserTabHeader />}
      content={<OrgContent />}
    />
  );
};
