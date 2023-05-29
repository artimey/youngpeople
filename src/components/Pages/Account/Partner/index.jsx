import React from "react";
import { AccountLayout } from "../../../Layouts/AccountLayout/AccountLayout";
import { PartnerSidebar } from "./ParnerSidebar";
import { UserTabHeader } from "../User/UserTabHeader/UserTabHeader";
import { PartnerContent } from "./PartnerContent";

export const Partner = () => {
  <AccountLayout
    tabs={<PartnerSidebar />}
    tabHeader={<UserTabHeader />}
    content={<PartnerContent />}
  />;
};
