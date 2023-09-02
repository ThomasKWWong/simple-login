import React from 'react';
import { FWave, SDiv } from './styles';
import { Background, BWave } from "./styles";

const BGWave = () => {
    return (
        <SDiv>
            <Background/>
            <BWave/>
            <FWave/>
        </SDiv>
    )
}

export default BGWave;