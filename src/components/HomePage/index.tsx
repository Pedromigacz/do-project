import * as React from "react"
import styled from "styled-components"
import Header from "./Header"

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
            src="../../static/images/lotus_.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            layout="fixed"
            width={280}
            height={280}
          />
        </ImageWrapper>
        <Header />
        <InformationWrapper>
          <MainTitle>Seed Chumbi</MainTitle>
          <SecondTitle>Sale is closed 0/1000</SecondTitle>
          <ThirdTitle>The pods will hatch soon!</ThirdTitle>
          <Paragraph>
            Seed Chumbi will be the first and rarest Chumbi NFTs to ever exist!
            if you missed the sale, you can still buy them on opensea.
          </Paragraph>
        </InformationWrapper>
      </Layout>
    </BackgroundImage>
  )
}

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 2fr 3fr;
`

// grid top left

const ImageWrapper = styled.div`
  justify-self: center;
  align-self: center;
`

// Main

const InformationWrapper = styled.main`
  display: flex;
  flex-direction: column;
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
  font-size: 4rem;
  margin: 0;
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

export default HomePageLayout
