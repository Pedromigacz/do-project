import * as React from "react"
import styled from "styled-components"
import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"

const Header: React.FC = () => {
  return (
    <>
      <MobileWrapper>
        <MobileHeader />
      </MobileWrapper>
      <DesktopWrapper>
        <DesktopHeader />
      </DesktopWrapper>
    </>
  )
}

const MobileWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  @media (min-width: 1440px) {
    display: none;
  }
`

const DesktopWrapper = styled.div`
  @media (max-width: 1440px) {
    display: none;
  }
`

export default Header
