import styled from 'styled-components';

export const TextSpan = styled.span`
    display: inline-block;
    vertical-allign: middle;
    color: white;
`

export const HeadDiv = styled.div`
    /* Dimensions and color */
    width: 100%;
    height: 10%;
    background-color: #b38bb0;

    /* Aligns the text/items in middle of footer */
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FootDiv = styled.div`
    /* Dimensions and color */
    bottom: 0;
    width: 100%;
    height: 10%;
    background-color: #b38bb0;

    /* Keeps footer at bottom of page */
    position: fixed;

    /* Aligns the text/items in middle of footer */
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SForm = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 40px;
    background-color: #b38bb0;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const SFormTitle = styled.h1`
    font-size: 36px;
    color: black;
    text-align: center;
`;

export const SFormControl = styled.span`
`;

export const SLabel = styled.label`
    font-size: 16px;
    font-weight: bold;
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