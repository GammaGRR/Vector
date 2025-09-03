import React from "react";
import { Header } from "./components/header";
import { InfoSlider } from "./components/infoslider";
import { SecurityService } from "./components/service";
import { BlockButton } from "./components/blockbutton";
import { Stats } from "./components/prefers";
import { CompletedWorks } from "./components/completedworks";
import { Mark } from "./components/mark";
import { FAQSection } from "./components/FAQSection";
import { TeamSection } from "./components/team";
import { WorkSteps } from "./components/steps";
import { FittingForm } from "./components/forma";
import { Footer } from "./components/footer";
import { Preloader } from "./components/pre-loader";

const App = () => {
  return (
    <>
      <Preloader />
      <Header />
      <InfoSlider />
      <SecurityService />
      <BlockButton />
      <Stats />
      <CompletedWorks />
      <Mark />
      <TeamSection />
      <WorkSteps />
      <FAQSection />
      <FittingForm />
      <Footer />
    </>
  );
};

export default App;
