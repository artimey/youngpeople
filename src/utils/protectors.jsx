import { Org } from "../components/Pages/Account/Org";
import { Partner } from "../components/Pages/Account/Partner";
import { User } from "../components/Pages/Account/User";
import {
  ORG_GROUP_NUMBER,
  PARTNER_GROUP_NUMBER,
  USER_GROUP_NUMBER,
} from "./constants/person";

export const personComponents = {
  [USER_GROUP_NUMBER]: () => <User />,
  [ORG_GROUP_NUMBER]: () => <Partner />,
  [PARTNER_GROUP_NUMBER]: () => <Org />,
};
