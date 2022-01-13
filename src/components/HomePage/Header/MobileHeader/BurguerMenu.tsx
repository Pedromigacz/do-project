import * as React from "react"
import styled from "styled-components"

const BurguerMenu: React.FC<{ open: boolean; onClick: () => void }> = ({
  open,
  onClick,
}) => (
  <BurguerWrapper onClick={onClick}>
    <BarOne open={open} />
    <BarTwo open={open} />
    <BartThree open={open} />
  </BurguerWrapper>
)

const BurguerWrapper = styled.button`
  cursor: pointer;
  height: 48px;
  position: relative;
  transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;
  user-select: none;
  width: 48px;
  outline: currentcolor none medium;
  transform: none;
  background: transparent;
  border: none;
`

const BarOne = styled.div`
  background: #fff none repeat scroll 0% 0%;
  height: 3px;
  left: 8px;
  position: absolute;
  border-radius: 9em;
  width: 32px;
  top: 13px;
  transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;
  ${({ open }: { open: boolean }) =>
    open
      ? "transform: rotate(-45deg) translate(-7.07px, 7.07px);"
      : "transform: none;"}
`

const BarTwo = styled.div`
  background: #fff none repeat scroll 0% 0%;
  height: 3px;
  left: 8px;
  position: absolute;
  border-radius: 9em;
  width: 32px;
  top: 23px;
  transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;
  ${({ open }: { open: boolean }) =>
    open ? "transform: scaleX(0);" : "transform: none;"}
`

const BartThree = styled.div`
  background: #fff none repeat scroll 0% 0%;
  height: 3px;
  left: 8px;
  position: absolute;
  border-radius: 9em;
  width: 32px;
  top: 33px;
  transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;
  ${({ open }: { open: boolean }) =>
    open
      ? "transform: rotate(45deg) translate(-7.07px, -7.07px);"
      : "transform: none;"}
`

export default BurguerMenu
