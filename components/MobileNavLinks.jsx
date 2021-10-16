import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: 120px;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #1e1e1e;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 20vh;
  z-index: 100;
  left: 0;
  align-items: center;
`;
const LinkItem = styled.li`
  width: 100%;
  padding: 0.5em 1.1em;
  color: #ffffff;
  font-weight: 700;
  font-size: 72px;
  display: flex;
  margin-bottom: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  text-transform: uppercase;
`;
const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="/">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/shop">Store</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/partners">Partners</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/contact">Contact</Link>
          </LinkItem>
          <Marginer />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}