import styled from "styled-components";

// export const SSquareContainer  - outro jeito para infomar que está sendo feito com style-component
export const SquareContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border: 1px ${props => props.borderStyle ? props.borderStyle : "dotted" } black;
    width: 200px;
    height: 200px;
    background-color: 
    ${props => props.squad = 'Palmeiras' ? "green" : "red"};
`

export const SquareLink = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: black;
`