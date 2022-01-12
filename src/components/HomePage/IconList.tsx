import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// icons
import Telegram from "../icons/Telegram"
import Twitter from "../icons/Twitter"
import Discord from "../icons/Discord"
import Github from "../icons/Github"
import Medium from "../icons/Medium"

const IconList: React.FC = () => (
  <Wrapper>
    <Link to="#">
      <Icon>
        <Telegram />
      </Icon>
    </Link>
    <Link to="#">
      <Icon>
        <Twitter />
      </Icon>
    </Link>
    <Link to="#">
      <Icon>
        <Discord />
      </Icon>
    </Link>
    <Link to="#">
      <Icon>
        <Github />
      </Icon>
    </Link>
    <Link to="#">
      <Icon>
        <Medium />
      </Icon>
    </Link>
  </Wrapper>
)

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
`

const Icon = styled.li`
  list-style: none;
  margin: 3rem 1rem 0 1rem;
  display: inline-block;
`

export default IconList
