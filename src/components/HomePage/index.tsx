import * as React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

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
    <Layout>
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...bgImage}
        preserveStackingContext
        style={{ height: "100vh" }}
      >
        HomePageLayout
      </BackgroundImage>
    </Layout>
  )
}

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
`

export default HomePageLayout
