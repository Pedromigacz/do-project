import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BurguerMenu from "./BurguerMenu"

const MobileHeader: React.FC = () => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
      <PlaceHolder />
      <BurguerMenu open={open} onClick={toggleMenu} />
      <header>
        {open && (
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
        )}
      </header>
    </>
  )
}

const PlaceHolder = styled.div`
  height: none;
  margin-bottom: 6rem;
`

const HeaderWrapper = styled.ul`
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  align-self: center;
  background: #f4f4f4;
  width: 100vw;

  font-family: var(--second-font);
  font-weight: 700;
  color: #0479bf;
  font-size: 1.75rem;
`

const LinkContent = styled.li`
  border: none;
  margin: none;
  list-style: none;
  padding: 6px 8px;
  transition: 150ms;
  border-radius: 5px;
  text-align: center;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`

export default MobileHeader
