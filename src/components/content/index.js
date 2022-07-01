import React from 'react';
import About from './about';
import Home from './home';
import Services from './services';
import { ContentBody } from './style';
import Team from './team';

const Content = ({homeRef, aboutRef}) => {

    return (
        <ContentBody id="content">
            <Home homeRef={homeRef} id="#home"/>
            <About aboutRef={aboutRef} id="#about"/>
            <Services id="services"/>
            <Team id="team"/>
        </ContentBody>
    )
}

export default Content;