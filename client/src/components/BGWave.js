import React from 'react';
import { SSVG, SDiv } from './styles';

const BGWave = () => {
    return (
        <SDiv>
            <SSVG width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1920" height="1080" fill="url(#paint0_linear_1_7)"/>
            <defs>
            <linearGradient id="paint0_linear_1_7" x1="860" y1="48.5" x2="960" y2="1080" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F6E4FF"/>
            <stop offset="1" stop-color="#CF7EF5"/>
            </linearGradient>
            </defs>
            </SSVG>

            <SSVG width="1920" height="1008" viewBox="0 0 1920 1008" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L46 17.5C91 33.25 183 66.5 274 134.75C366 201.25 457 302.75 549 437.5C640 570.5 731 738.5 823 672C914 605.5 1006 302.75 1097 285.25C1189 269.5 1280 537.25 1371 672C1463 806.75 1554 806.75 1646 705.25C1737 605.5 1829 402.5 1874 302.75L1920 201.25V1008H1874C1829 1008 1737 1008 1646 1008C1554 1008 1463 1008 1371 1008C1280 1008 1189 1008 1097 1008C1006 1008 914 1008 823 1008C731 1008 640 1008 549 1008C457 1008 366 1008 274 1008C183 1008 91 1008 46 1008H0V0Z" fill="url(#paint0_linear_1_9)"/>
            <defs>
            <linearGradient id="paint0_linear_1_9" x1="960" y1="0" x2="960" y2="1008" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5E0098" stop-opacity="0.51"/>
            <stop offset="1" stop-color="#9E00FF" stop-opacity="0.24"/>
            </linearGradient>
            </defs>
            </SSVG>

        </SDiv>
    )
}

export default BGWave;