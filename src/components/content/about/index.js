import React from 'react';
import { useInViewport } from 'react-in-viewport';
import { SectionHeader } from '../style';
import { AboutBody } from './style';


const About = ({aboutRef}) => {

    const { inViewport, enterCount } = useInViewport(aboutRef);


    return (
        <div ref={aboutRef} style={{scrollMarginTop: '100px'}}>
            <SectionHeader scrollMargin={250}>About myNFTfren</SectionHeader>
            <AboutBody inViewport={inViewport && enterCount === 1} >myNFTfren’s mission is to make your NFT journey as efficient and pain free as possible, whether you are a collector or creator.  Your virtual fren is capable of providing any service you desire, ranging from whitelist grinding on discord and twitter, creating fanart for projects, compiling relevant marketing lists for your project, and more. </AboutBody>
        </div>
    )
}

export default About;