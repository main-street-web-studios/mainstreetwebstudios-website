import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about/About"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" keywords={[`gatsby`, `application`, `react`]} />
    <About />
  </Layout>
)

export default AboutPage
