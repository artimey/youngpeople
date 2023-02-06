import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/Pages/AboutUs";
import { CoWorkingBooking } from "./components/Pages/CoWorkingBooking";
import { CoWorkingZones } from "./components/Pages/CoWorkingZones";
import { EventPage } from "./components/Pages/EventPage";
import { EventsPage } from "./components/Pages/EventsPage";
import { HomePage } from "./components/Pages/HomePage";
import { UiKit } from "./components/UiKit";



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/co-working-zones" element={<CoWorkingZones />} />
      <Route path="/co-working-zones/:zoneSlug" element={<CoWorkingBooking />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:eventSlug" element={<EventPage />} />
      <Route path="/uikit" element={<UiKit />} />
    </Routes>
  )
}

export default App;
