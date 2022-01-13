import * as React from "react"
import lotusGif from "../../static/images/lotus.gif"
import styled from "styled-components"

const GifContainer: React.FC = () => (
  <RotatingLogoWrapper>
    <Logo src={lotusGif} alt="rotationg logo gif" />
  </RotatingLogoWrapper>
)

const RotatingLogoWrapper = styled.div`
  margin-top: 6rem;
  align-self: start;
  justify-self: center;
  display: grid;
  place-items: center;
  background: #eeeeee;
  box-shadow: inset 0px 0px 23px 1px rgba(0, 0, 0, 0.4);
  border-radius: 106px;
  width: 45vw;
  height: 26vw;
  img {
    display: inline-block;
    height: 100%;
    margin: 0 auto;
  }

  @media (max-width: 1440px) {
    border-radius: 0;
    grid-column-start: 1;
    grid-column-end: 3;
    width: 100vw;
    height: 46vw;
  }
  @media (max-width: 1440px) {
    height: 260px;
  }
`

const Logo = styled.img`
  width: 20vw !important;
  height: 20vw !important;
  min-width: 200px !important;
  min-height: 200px !important;
  @media (max-width: 630px) {
    position: absolute;
    left: 50vw;
    transform: translateX(-50%);

    width: 200px !important;
    height: 200px !important;
  }
`

export default GifContainer
