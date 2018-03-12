import React from 'react';
import htmlContent from './meet_and_greet.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';

const MeetAndGreetHtml = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);
export default MeetAndGreetHtml;
