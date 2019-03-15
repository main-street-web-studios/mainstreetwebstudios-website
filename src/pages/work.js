import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../components/work/Work"

const WorkPage = () => (
  <Layout>
    <SEO title="Our Work" keywords={[`gatsby`, `application`, `react`]} />
    <Work />
  </Layout>
)

export default WorkPage
