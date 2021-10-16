import React from "react";
import styled from "styled-components";
import logo from '../public/Logo.png'
import Image from "next/dist/client/image";

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const LogoImg = styled.div`
    width: 348px;
    height: 32px;
    Image {
        width: 100%;
        height: 100%;
    }
`;
const LogoText = styled.h2`
    font-size: 16px;
    margin: 0;
    margin-left: 4px;
    color: #ffffff;
    font-weight: 500;
`;

export default function Logo() {
    return <LogoWrapper>
        <LogoImg><Image src={logo} alt="Logo" width="348px" height="32px"></Image></LogoImg>
    </LogoWrapper>
}