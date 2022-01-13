import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MobileHeader: React.FC = () => {
  return (
    <header>
      <HeaderWrapper>
        <Link to="#">
          <LinkContent>Home</LinkContent>
        </Link>
        <Link to="#">
          <LinkContent>Team</LinkContent>
        </Link>
        <Link to="#">
          <LinkContent>Mint</LinkContent>
        </Link>
        <Link to="#">
          <LinkContent>Subscribe</LinkContent>
        </Link>
      </HeaderWrapper>
    </header>
  )
}

const HeaderWrapper = styled.ul`
  border: none;
  margin: 0 100px;
  margin-top: 4rem;
  display: flex;
  justify-content: space-evenly;
  font-family: var(--second-font);
  font-weight: 700;
  color: #0479bf;
  font-size: 1.75rem;
  align-self: center;
`

const LinkContent = styled.li`
  border: none;
  margin: none;
  list-style: none;
  padding: 6px 8px;
  transition: 150ms;
  border-radius: 5px;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`

export default MobileHeader
