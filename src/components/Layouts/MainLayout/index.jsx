import { MyFooter } from "../../Footer";
import { Navbar } from "../../Navbar";

export const MainLayout = ({
  children,
  isHaveFooter = true,
  isNewsOnePage = false,
}) => {
  return (
    <div>
      <Navbar isNewsOnePage={isNewsOnePage} />
      <div>{children}</div>
      {isHaveFooter && <MyFooter />}
    </div>
  );
};
