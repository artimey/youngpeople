import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/Pages/AboutUs";
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
import { UiKit } from "./components/UiKit";

import 'core-js/actual';



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/co-working-zones" element={<CoWorkingZones />} />
      <Route path="/co-working-zones/:zoneSlug" element={<CoWorkingBooking />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:eventSlug" element={<EventPage />} />
      <Route path='/partners' element={<PartnersPage/>}/>
      <Route path='/news' element={<NewsPage/>}/>
      <Route path='/news/:newsSlug' element={<NewsOnePage />}/>
      <Route path='/projects' element={<ProjectsPage />}/>
      <Route path='/projects/:projectSlug' element={<ProjectPage />}/>

      {/* ====== НЕ УДАЛЯЙ, ПРОСТО ЗАКОММЕНТЬ ====== */}
      <Route path='/uikit' element={<UiKit />}/>
    </Routes>
  )
}

export default App;