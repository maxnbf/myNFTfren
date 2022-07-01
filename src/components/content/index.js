import React from 'react';
import About from './about';
import Contact from './contact';
import Home from './home';
import Services from './services';
import { ContentBody } from './style';
import Team from './team';

const Content = ({homeRef, aboutRef, servicesRef, teamRef, contactRef}) => {

    return (
        <ContentBody id="content">
            <Home homeRef={homeRef} contactRef={contactRef} id="#home"/>
            <About aboutRef={aboutRef} id="#about"/>
            <Services servicesRef={servicesRef} id="services"/>
            <Team teamRef={teamRef} id="team"/>
            <Contact contactRef={contactRef} id="contact" />
        </ContentBody>
    )
}

export default Content;