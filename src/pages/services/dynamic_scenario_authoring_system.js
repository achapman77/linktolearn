import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { Section, SectionHeader, Container } from '../../components/layout/Section'

const ScenarioAuthoringPage = () => (
  <Layout>
    <Seo title="Dynamic Scenario Authoring System" />
    <Section>
      <SectionHeader>
        <h1>Dynamic Scenario Authoring System</h1>
      </SectionHeader>
      <Container>
        <p>Stuff Goes Here</p>
      </Container>
    </Section>
  </Layout>
)

export default ScenarioAuthoringPage