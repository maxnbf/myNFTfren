import React from 'react';
import { BookAMeeting, CountUpText, IconImage, IconName, Icons, IconWrapper, InfoContainer, InfoHeader, InfoRow, Logo, SubText } from './style';

import logo from '../../../assets/image1.png'
import img1 from "../../../assets/InvisibleFriends1.png"
import img2 from "../../../assets/HAPE Prime2.png"
import img3 from "../../../assets/The Possessed3.png"
import img4 from "../../../assets/Sneakerheads 4.png"
import img5 from "../../../assets/Degen Toonz5.png"
import img6 from "../../../assets/3landers6.png"
import img7 from "../../../assets/Karafuru7.png"
import img8 from "../../../assets/Wonderpals8.png"
import img9 from "../../../assets/Loser Club9.png"
import img10 from "../../../assets/Memeland10.png"
import img11 from "../../../assets/Rarebears11.png"
import img12 from "../../../assets/Tasty Bones12.png"
import { scrollTo } from '../../navbar';

const whitelist = [{src: img1, name:"Invisible Friends"}, {src: img2, name:"HAPE Prime"}, {src: img3, name:"The Possessed"}, {src: img4, name:"Sneakerheads"},
{src: img5, name:"Degen Toonz"}, {src: img6, name:"3landers"}, {src: img7, name:"Karafuru"}, {src: img8, name:"Wonderpals"},
{src: img9, name:"Loser Club"}, {src: img10, name:"Memeland"}, {src: img11, name:"Rarebears"}, {src: img12, name:"Tasty Bones"}]

const Home = ({homeRef, contactRef}) => {

    return (
        <div>
            <Logo ref={homeRef} src={logo} />
            <SubText>Whitelist grind, Fan art, Marketing lists, and more!</SubText>
            <SubText>Your virtual NFT assistant to handle any and all tasks</SubText>
            <BookAMeeting onClick={() => scrollTo(contactRef)}>Book a meeting</BookAMeeting>
            
            <InfoRow>
                <InfoContainer>
                    <InfoHeader>Customers Served</InfoHeader>
                    <CountUpText duration={2.5} end={24} useEasing={true}></CountUpText>
                </InfoContainer>
                <InfoContainer>
                    <InfoHeader>Whitelist</InfoHeader>
                    <Icons>
                    {
                        whitelist.map((icon) => <IconWrapper><IconImage src={icon.src}></IconImage><IconName>{icon.name}</IconName></IconWrapper>)
                    }
                    </Icons>
                </InfoContainer>
            </InfoRow>
        </div>
    )
}

export default Home;