import React from "react";
import styled from "styled-components";
import logo from '../public/Logo.png'
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const LogoImg = styled.div`
    width: 348px;
    height: 32px;
    img {
        width: 348px;
        height: 32px;
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
        <Link href="/">
        <LogoImg><img src={logo.src} alt="Logo" id="logo" /></LogoImg>
        </Link>
    </LogoWrapper>
}