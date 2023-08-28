import React from 'react';
import styled from 'styled-components';
import { TextSpan } from './TextSpan';

const Header = () => {
    return(
        <HeadDiv>
            <TextSpan>
                <h1>Header</h1>
            </TextSpan>
        </HeadDiv>
    )
}

const HeadDiv = styled.div`
    /* Dimensions and color */
    width: 100%;
    height: 15%;
    background-color: purple;

    /* Aligns the text/items in middle of footer */
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Header;