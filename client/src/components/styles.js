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