import React from 'react';
import { AboutHeader } from '../about/style';
import headshot from "../../../assets/Headshot.png"
import nft from "../../../assets/Psychedelic NFT.png"
import { Headshot, Images, JesseBody, JesseDescription, NFT, TeamDescription } from './style';

const Team = () => {
    return (
        <div>
            <AboutHeader>Meet the Team</AboutHeader>
            <JesseBody>
                <Images>
                    <Headshot src={headshot}/>
                    <NFT src={nft}/>
                </Images>
                <JesseDescription>
                    I’m Jesse, founder of myNFTfren, and an OG NFT Degen looking to make our crazy space more convenient and stress free for everyone
                </JesseDescription>
            </JesseBody>
            <TeamDescription>
                Our virtual assistants are from all over the world, including India, Nigeria, and the Philippines. Each fren went through a minimum of 5 hours of training with our team to ensure they have not only the skillset, but also the necessary familiarity with the NFT space to perform at a high level.
            </TeamDescription>
        </div>
    )
}

export default Team;