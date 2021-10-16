import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
 height: 100%;
 display: flex;
 align-items: center;
`;
const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
`;
const LinkItem = styled.li`
    height: 100%;
    padding: 0 1.1em;
    color: #fdfdfd;
    font-weight: 600;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    list-style: none;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out;
    &:hover {
        border-top: 2px solid#6dffda;
    }
`;
const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    text-transform: uppercase;
`;
export default function NavLinks() {
    return <NavLinksContainer>
        <LinksWrapper>
            <LinkItem><Link href="/">Home</Link></LinkItem>
            <LinkItem><Link href="/shop">Store</Link></LinkItem>
            <LinkItem><Link href="/partners">Partners</Link></LinkItem>
            <LinkItem><Link href="/contact">Contact</Link></LinkItem>
        </LinksWrapper>
    </NavLinksContainer>
}