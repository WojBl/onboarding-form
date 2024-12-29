import { Route, Routes } from "react-router";
import Header from "../Header";
import Home from "../../pages/Home/inndex";
import AboutUs from "../../pages/AboutUs";
import OnboardingDashboard from "../../pages/OnboardingDashboard";
import AboutYou from "../../pages/AboutYou";
import LegalAssesments from "../../pages/LegalAssesments";
import WorkplaceGuidelines from "../../pages/WorkplaceGuidelines";
import HowWeWork from "../../pages/HowWeWork";

export default function App(): JSX.Element {
  return (
    <div className="flex justify-center">
      <Header />
      <div className="mt-[72px] w-full max-w-6xl flex justify-center">
        <Routes>
          <Route path='onboarding-dashboard' element={<OnboardingDashboard />}/>
          <Route path='about-us' element={<AboutUs />}/>
          <Route path='how-we-work' element={<HowWeWork />}/>
          <Route path='workplace-guidelines' element={<WorkplaceGuidelines />}/>
          <Route path='legal-assesments' element={<LegalAssesments />}/>
          <Route path='about-you' element={<AboutYou />}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
