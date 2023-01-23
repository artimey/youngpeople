import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/Pages/AboutUs";
import { CoWorkingBooking } from "./components/Pages/CoWorkingBooking";
import { EventPage } from "./components/Pages/EventPage";
import { EventsPage } from "./components/Pages/EventsPage";
import { HomePage } from "./components/Pages/HomePage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/co-working-booking" element={<CoWorkingBooking />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:eventSlug" element={<EventPage />} />
    </Routes>
  )
}

export default App;
