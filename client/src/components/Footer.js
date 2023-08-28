import styled from 'styled-components';
import { TextSpan } from './TextSpan';

const Footer = () => {
    return (
        <FootDiv>
            <TextSpan>
                <h1>Footer</h1>
            </TextSpan>
        </FootDiv>
    )
}

const FootDiv = styled.div`
    /* Dimensions and color */
    bottom: 0;
    width: 100%;
    height: 15%;
    background-color: purple;

    /* Keeps footer at bottom of page */
    position: fixed;

    /* Aligns the text/items in middle of footer */
    display: flex;
    align-items: center;
    justify-content: center;
`;



export default Footer;