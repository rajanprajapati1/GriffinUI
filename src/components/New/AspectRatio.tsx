import type React from "react"
import styled from "styled-components"

type AspectRatioProps = {
  ratio?: number
  children: React.ReactNode
  className?: string
}

const Container = styled.div<{ ratio: number }>`
  position: relative;
  width: 100%;
  
  &::before {
    content: "";
    display: block;
    padding-bottom: ${(props) => `${(1 / props.ratio) * 100}%`};
  }
`

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const AspectRatio: React.FC<AspectRatioProps> = ({ ratio = 16 / 9, children, className }) => {
  return (
    <Container ratio={ratio} className={className}>
      <Content>{children}</Content>
    </Container>
  )
}

export default AspectRatio
