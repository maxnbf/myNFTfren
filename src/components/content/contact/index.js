import React from 'react';
import { InlineWidget } from 'react-calendly';
import { SectionHeader } from '../style';
import { Gmail, MediaItem, MediaLink, SocialMedia, Twitter } from './style';
import gmail from "../../../assets/gmail.png"
import twitter from "../../../assets/twitter.png"
const Contact = ({contactRef}) => {

    return (
        <div>
            <SectionHeader ref={contactRef} scrollMargin={150}>ContactUs</SectionHeader>
            <InlineWidget url="https://calendly.com/mynftfren/infocall" />
            <SocialMedia>
                <MediaItem>
                    <Gmail src={gmail} emailto/>
                    <MediaLink href="mailto:myNFTfren@gmail.com">myNFTfren@gmail.com</MediaLink>
                </MediaItem>
                <MediaItem>
                    <Twitter src={twitter}/>
                    <MediaLink target="_blank" href="http://twitter.com/myNFTfren">@myNFTfren</MediaLink>
                </MediaItem>
            </SocialMedia>
        </div>
    )
}

export default Contact