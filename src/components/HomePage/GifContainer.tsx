import * as React from "react"
import lotusGif from "../../static/images/lotus.gif"
import styled from "styled-components"

const GifContainer: React.FC = () => (
  <RotatingLogoWrapper>
    <img src={lotusGif} alt="rotationg logo gif" />
  </RotatingLogoWrapper>
)

const RotatingLogoWrapper = styled.div`
  align-self: center;
  justify-self: center;
  display: grid;
  place-items: center;
  background: #444444;
  box-shadow: inset 0px 0px 23px 1px rgba(0, 0, 0, 0.2);
  border-radius: 106px;
  width: 40vw;
  height: 30vw;
  img {
    display: inline-block;
    height: 100%;
  }
`

export default GifContainer
