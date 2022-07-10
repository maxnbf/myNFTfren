import React from 'react';
import { useInViewport } from 'react-in-viewport';
import headshot from "../../../assets/Headshot.png"
import nft from "../../../assets/Psychedelic NFT.png"
import { Headshot, Images, JesseBody, JesseDescription, NFT, TeamDescription, TeamMemberImage, TeamMemberName, TeamMemberProfile, TeamMemberRole, TeamProfiles } from './style';
import { SectionHeader } from '../style';

import advisor from "../../../assets/advisor NFT-modified.png";
import leaddev from "../../../assets/developer nft-modified.png";

const Team = ({teamRef}) => {

    const { inViewport, enterCount } = useInViewport(teamRef);


    return (
        <div ref={teamRef} style={{scrollMarginTop: '100px'}}>
            <SectionHeader scrollMargin={100}>Meet the Team</SectionHeader>
            <JesseBody >
                <Images>
                    <Headshot inViewport={inViewport && enterCount === 1} src={headshot}/>
                    <NFT inViewport={inViewport && enterCount === 1} src={nft}/>
                </Images>
                <JesseDescription inViewport={inViewport && enterCount === 1}>
                    I’m Jesse, founder of myNFTfren, and an OG NFT Degen looking to make our crazy space more convenient and stress free for everyone
                </JesseDescription>
            </JesseBody>
            <TeamDescription inViewport={inViewport && enterCount === 1} >
                Our virtual assistants are from all over the world, including India, Nigeria, and the Philippines. Each fren went through a minimum of 5 hours of training with our team to ensure they have not only the skillset, but also the necessary familiarity with the NFT space to perform at a high level.
            </TeamDescription>
            <TeamProfiles>
                <TeamMemberProfile>
                    <TeamMemberImage src={advisor}/>
                    <TeamMemberName>Max</TeamMemberName>
                    <TeamMemberRole>Advisor</TeamMemberRole>
                </TeamMemberProfile>
                <TeamMemberProfile>
                    <TeamMemberImage src={leaddev}/>
                    <TeamMemberName>Jason</TeamMemberName>
                    <TeamMemberRole>Lead Dev</TeamMemberRole>
                </TeamMemberProfile>
            </TeamProfiles>
        </div>
    )
}

export default Team;