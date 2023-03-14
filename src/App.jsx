import { Navigate, Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/Pages/AboutUs";
import { User } from "./components/Pages/Account/User";
import { CoWorkingBooking } from "./components/Pages/CoWorkingBooking";
import { CoWorkingZones } from "./components/Pages/CoWorkingZones";
import { EventPage } from "./components/Pages/EventPage";
import { EventsPage } from "./components/Pages/EventsPage";
import { HomePage } from "./components/Pages/HomePage";
import { NewsOnePage } from "./components/Pages/NewsOnePage";
import { NewsPage } from "./components/Pages/NewsPage";
import { PartnersPage } from "./components/Pages/PartnersPage";
import { ProjectPage } from "./components/Pages/ProjectPage";
import { ProjectsPage } from "./components/Pages/ProjectsPage";
import { RestorePassword } from "./components/Pages/RestorePassword";
import { SignInPage } from "./components/Pages/SignIn";
import { UiKit } from "./components/UiKit";
import { SignUpFirstStep, SignUpSecondStep } from "./components/Pages/SignUp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { USER } from "./utils/constants";

import "core-js/actual";
import { setUser } from "./app/store/slices/user";

function App() {
  const { person } = useSelector((s) => s);
  const dispatch = useDispatch();

  useEffect(() => {
    if (person) {
      localStorage.setItem(USER, JSON.stringify(person));
    }
    if (!person && localStorage.getItem(USER)) {
      dispatch(setUser(JSON.parse(localStorage.getItem(USER))));
    }
  }, [person]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/co-working-zones" element={<CoWorkingZones />} />
      <Route
        path="/co-working-zones/:zoneSlug"
        element={<CoWorkingBooking />}
      />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:eventSlug" element={<EventPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:newsSlug" element={<NewsOnePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:projectSlug" element={<ProjectPage />} />
      <Route path="/sign_up/first_step" element={<SignUpFirstStep />} />
      <Route path="/sign_up/second_step" element={<SignUpSecondStep />} />
      <Route path="/sign_in" element={<SignInPage />} />
      <Route path="/restore_password" element={<RestorePassword />} />
      <Route path="/account" element={<User />} />
      <Route path="/uikit" element={<UiKit />} />
    </Routes>
  );
}

export default App;
