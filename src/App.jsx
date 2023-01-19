import { AboutUs } from "./components/AboutUs";
import { Afisha } from "./components/Afisha";
import { AllNews } from "./components/AllEvents/";
import { EventsSlider } from "./components/EventsSlider";
import { MyFooter } from "./components/Footer";
import { Header } from "./components/Header";
import { Partners } from "./components/Partners";
import { Projects } from "./components/Projects";


function App() {
  return (
    <div className="z-[100]">
      <Header />
      <div className="z-[99]">
        <Afisha />
      </div>
      <div className="z-[9999] relative -mt-[30px]">
        <EventsSlider />
      </div>
      <AllNews />
      <div className="z-[9999] relative -mt-[30px]  border-t-2 border-t-white8 rounded-t-[32px]">
        <Projects />
      </div>
      <Partners />
      <MyFooter />
    </div>
  )
}

export default App;
