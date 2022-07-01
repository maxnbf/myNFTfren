import React from 'react';
import { InlineWidget } from 'react-calendly';
import { SectionHeader } from '../style';

const Contact = ({contactRef}) => {

    return (
        <div>
            <SectionHeader ref={contactRef} scrollMargin={150}>ContactUs</SectionHeader>
            <InlineWidget url="https://calendly.com/mynftfren/infocall" />
        </div>
    )
}

export default Contact