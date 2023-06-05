import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "rsuite";

import NavbarHead from "./component/Navbar/NavbarHead";
import Home from "./component/home/Home";
import { useRef } from "react";

import AboutUs from "./component/aboutus/AboutUs";
import Footer from "./component/Footer/Footer";
import AcuteKidneyDisease from "./component/kidneydisease/AcuteKidneyDisease";
import ChronicKidneyDisease from "./component/kidneydisease/ChronicKidneyDisease";
import PolycysticKidneyDisease from "./component/kidneydisease/PolycysticKidneyDisease";
import NephroticSyndrome from "./component/kidneydisease/NephroticSyndrome";
import Creatinine from "./component/kidneydisease/Creatinine";
import Proteinuria from "./component/kidneydisease/Proteinuria";
import Contact from "./component/contact/Contact";
import "./App.css";
import ThankyouPage from "./component/contact/ThankyouPage";
import Ayurveda from "./component/home/Ayurveda";
import AboutUsOne from "./component/aboutus/AboutUsOne";
import AboutUsTwo from "./component/aboutus/AboutUsTwo";
import AboutUsThree from "./component/aboutus/AboutUsThree";
import AboutUsFour from "./component/aboutus/AboutUsFour";
import AboutUsFive from "./component/aboutus/AboutUsFive";
import AboutUsSix from "./component/aboutus/AboutUsSix";
import PaymentSuccess from "./component/Payment/PaymentSuccess";
import PaymentFailure from "./component/Payment/PaymentFailure";

function App() {
  // const alertRef = useRef();
  // console.log(alertRef);
  return (
    <div className="App">
      <div className="ayurvedacontainer">
        <Container className="containerclass">
          <NavbarHead />
          <Routes>
            <Route path="/" index element={<Home />} />

            <Route path="about" element={<AboutUs />} />
            <Route
              path="kidneydisease/acutekidneydisease"
              element={<AcuteKidneyDisease />}
            />
            <Route
              path="kidneydisease/chronickidneydisease"
              element={<ChronicKidneyDisease />}
            />
            <Route
              path="kidneydisease/polycystickidneydisease"
              element={<PolycysticKidneyDisease />}
            />
            <Route
              path="kidneydisease/nephroticsyndrome"
              element={<NephroticSyndrome />}
            />
            <Route path="kidneydisease/proteinuria" element={<Proteinuria />} />
            <Route path="kidneydisease/creatinine" element={<Creatinine />} />
            <Route path="contact" element={<Contact />} />

            <Route path="ayurveda" element={<Ayurveda />} />
            <Route
              path="aboutus/urineoutputmeasurements"
              element={<AboutUsOne />}
            />
            <Route path="aboutus/kidneybiopsy" element={<AboutUsTwo />} />
            <Route path="aboutus/urinetests" element={<AboutUsThree />} />
            <Route path="aboutus/bloodtests" element={<AboutUsFour />} />
            <Route path="aboutus/imagingtests" element={<AboutUsFive />} />
            <Route path="aboutus/healthcare" element={<AboutUsSix />} />
            <Route path="thankyoupage" element={<ThankyouPage />} />
            <Route path="/success" element={<PaymentSuccess />} />
            <Route path="/failure" element={<PaymentFailure />} />
          </Routes>
        </Container>
        <Container className="containerclasst">
          <Footer />
        </Container>
      </div>
    </div>
  );
}

export default App;
