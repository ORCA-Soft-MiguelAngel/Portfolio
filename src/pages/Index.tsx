import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import {
  HomeSection,
  AboutMe,
  Clients,
  Contact,
  Projects,
  Services,
  Skills,
} from "../components/Sections";

const Index = () => {
  return (
    <MainLayout>
      {/**======= SECTION 1 - ABOVE THE FOLD =======*/}
      <div>
        <HomeSection />
      </div>
      {/**======= SECTION 2 - WHO I AM =======*/}
      <div>
        <AboutMe />
      </div>
      {/**======= SECTION 3 - SERVICES =======*/}
      <div>
        <Services />
      </div>
      {/**======= SECTION 4 - PROJECTS =======*/}
      <div>
        <Projects />
      </div>
      {/**======= SECTION 5 - SKILLS =======*/}
      <div>
        <Skills />
      </div>
      {/**======= SECTION 6 - CLIENTS =======*/}
      <div>
        <Clients />
      </div>
      {/**======= SECTION 7 - CONTACT ME =======*/}
      <div>
        <Contact />
      </div>
      {/**======= SECTION EXTRA - FLOATING THINGS =======*/}
      <div>waiting...</div>
    </MainLayout>
  );
};

export default Index;
