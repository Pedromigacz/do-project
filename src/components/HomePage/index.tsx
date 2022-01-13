import * as React from "react"
import styled from "styled-components"
import Header from "./Header"
import IconList from "./IconList"
import GifContainer from "./GifContainer"

import { graphql, useStaticQuery } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const HomePageLayout: React.FC = () => {
  const { filteredBackgroundImage } = useStaticQuery(
    graphql`
      query {
        filteredBackgroundImage: file(name: { eq: "filtered_background" }) {
          name
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: WEBP
              layout: FULL_WIDTH
              quality: 100
            )
          }
        }
      }
    `
  )
  const bgImage = convertToBgImage(getImage(filteredBackgroundImage))

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
      style={{
        height: "100vh",
      }}
    >
      <Layout>
        <ImageWrapper>
          <StaticImage
            src="../../static/images/lotus.png"
            alt="Lotus logo"
            placeholder="blurred"
            layout="fixed"
            width={160}
            height={160}
          />
        </ImageWrapper>
        <Header />
        <InformationWrapper>
          <MainTitle>Lotus Network</MainTitle>
          <SecondTitle>Sale is closed 0/1000</SecondTitle>
          <ThirdTitle>The pods will hatch soon!</ThirdTitle>
          <Paragraph>
            Seed Chumbi will be the first and rarest Chumbi NFTs to ever exist!
            if you missed the sale, you can still buy them on opensea.
          </Paragraph>
          <MainButton>Buy Now on Mint</MainButton>
          <IconList />
        </InformationWrapper>
        <GifContainer />
      </Layout>
    </BackgroundImage>
  )
}

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 3fr;
  gap: 10px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8) 0.01%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (min-width: 1440px) {
    padding-left: 4rem;
  }
`

// grid top left

const ImageWrapper = styled.div`
  justify-self: center;
  align-self: center;

  @media (max-width: 1440px) {
    display: none;
  }
`

// Main

const InformationWrapper = styled.main`
  margin-top: 6.5rem;
  align-self: start;
  display: flex;
  flex-direction: column;
  justify-self: center;
  max-width: 590px;
  display: inline-block;
`

const MainTitle = styled.h1`
  font-family: var(--main-font);
  font-weight: 900;
  color: #2caadf;
  font-size: 4.5rem;
  margin: 0;
`

const SecondTitle = styled.h2`
  font-family: var(--main-font);
  font-weight: 700;
  color: #c14f67;
  font-size: 3.5rem;
  margin: 0;
  margin-bottom: 2rem;
`

const ThirdTitle = styled.h3`
  font-family: var(--second-font);
  font-weight: 700;
  color: #2caadf;
  font-size: 28px;
  margin: 0;
`

const Paragraph = styled.p`
  font-family: var(--second-font);
  font-weight: 600;
  color: #ffffff;
  font-size: 22px;
  margin: 0;
`

const MainButton = styled.button`
  border: none;
  color: #fff;
  font-weight: 600;
  font-family: var(--second-font);
  font-size: 30px;
  padding: 24px 70px;
  margin: 2rem 0 0 2.5rem;

  background: linear-gradient(92.7deg, #8416a2 -0.23%, #de654d 100%);
  box-shadow: inset 0px 0px 23px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  transition: 200ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

export default HomePageLayout
