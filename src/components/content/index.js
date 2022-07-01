import React from 'react';
import About from './about';
import Home from './home';
import Services from './services';
import { ContentBody } from './style';
import Team from './team';

const Content = ({homeRef, aboutRef, servicesRef, teamRef}) => {

    return (
        <ContentBody id="content">
            <Home homeRef={homeRef} id="#home"/>
            <About aboutRef={aboutRef} id="#about"/>
            <Services servicesRef={servicesRef} id="services"/>
            <Team teamRef={teamRef} id="team"/>
        </ContentBody>
    )
}

export default Content;