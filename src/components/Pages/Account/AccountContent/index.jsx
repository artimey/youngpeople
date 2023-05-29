import React from "react";
import { useSelector } from "react-redux";
import { contentByGroup } from "../../../../utils/constants/account";

export const AccountContent = () => {
  const person = useSelector((s) => s.person);
  return <>{person?.userGroups && contentByGroup[person?.userGroups]}</>;
};
