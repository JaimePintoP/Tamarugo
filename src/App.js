import React from "react";
import { Switch, Route } from "react-router";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Passivehaus from "./pages/Passivhaus/Passivehaus";
import RealEstateProjects from "./pages/RealEsateProjects/RealEstateProjects";
import Team from "./pages/Team/Team";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/passivehaus" component={Passivehaus} />
        <Route exact path="/inmobiliarios" component={RealEstateProjects} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
      </Switch>
    </div>
  );
};

export default App;
