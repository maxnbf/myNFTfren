import React from 'react';
import About from './about';
import Home from './home';
import { ContentBody } from './style';

const Content = ({homeRef, aboutRef}) => {

    return (
        <ContentBody id="content">
            <Home homeRef={homeRef} id="#home"/>
            <About aboutRef={aboutRef} id="#about"/>
        </ContentBody>
    )
}

export default Content;