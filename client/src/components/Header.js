import React from 'react';
import { HeadDiv, HeadDivLeft, HeadDivLinkContainer, HeadDivRight, HeadDivLink } from './styles';


const Header = () => {
    return(
        <HeadDiv>
            <HeadDivLeft>
                <HeadDivLinkContainer>
                    <HeadDivLink to="/login"> Login</HeadDivLink>
                    <HeadDivLink to="/register">  Register</HeadDivLink>
                    <HeadDivLink to="/testing">  Test</HeadDivLink>
                    <HeadDivLink to="/contact">  Contact</HeadDivLink>
                </HeadDivLinkContainer>
            </HeadDivLeft>
            <HeadDivRight>

            </HeadDivRight>
        </HeadDiv>
    )
}



export default Header;