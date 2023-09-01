import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';


export const TextSpan = styled.span`
    display: inline-block;
    vertical-allign: middle;
    color: white;
`

export const HeadDiv = styled.nav`
    /* Dimensions and color */
    width: 100%;
    height: 80px;
    top: 0;
    max-height: 10%;
    background-color: #6e6e6e;

    position: fixed;
    z-index: 1;

    /* Aligns the text/items in middle of footer */
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeadDivLeft = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    height: 80px;
`

export const HeadDivLinkContainer = styled.div`
    display: flex;
    height: 100%;
    top 50%;
    align-items: center;
`

export const HeadDivLink = styled(Link)`
    color: white;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    transition: 0.3s;
    &:hover {
        font-size: 27px;
    }
`

export const HeadDivRight = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
    height: 80px;
`

export const FootDiv = styled.div`
    /* Dimensions and color */
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: #6e6e6e;

    /* Keeps footer at bottom of page */
    position: fixed;

    /* Aligns the text/items in middle of footer */
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SForm = styled.form`
    display: inline-block;
    width: 100%;
    max-width: 400px;
    padding: 40px;
    background-color: #6e6e6e;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const SFormTitle = styled.h1`
    font-size: 36px;
    color: white;
    text-align: center;
`;

export const SFormControl = styled.span`
`;

export const SLabel = styled.label`
    font-size: 16px;
    font-weight: bold;
    color: white;
`;

export const SInput = styled.input`
    display: block;
    width: 100%;
    height: 35px;
    outline: none;
    border: none;
    border radius: 5px;
    margin: 10px 0 20px 0;
    box-sizing: border-box;
    &:focus {
        box-shadow: 0px 0px 2px black;
    }
`;

export const SButton = styled.button`
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    border: none;
    transition: 0.3s;
    &:hover{
        background-color: #dbdbdb;
    }
`;

export const SDiv = styled.div`
    position:fixed;
    top:25%;
`

export const SDivR = styled.div`
    position: fixed;
    top: 22%;
`

export const AnimatedDiv = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const WaveAnimation = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
    }
`

export const AnimatedWave = styled.svg`
    height: 90vh;
    width: 200%;
    bottom: 0;
    position: absolute;
    animation: ${WaveAnimation} 10s linear infinite;
`

