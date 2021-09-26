import React from "react"
import FAQs from "../../components/faq/FAQ"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { Section, SectionHeader, Container } from '../../components/layout/Section'

const BEASTPage = () => (
  <Layout>
    <Seo title="BEAST Human Performance Metrics" />
    <Section>
      <SectionHeader>
        <h1>BEAST Human Performance Metrics</h1>
      </SectionHeader>
      <Container>
        <p>Stuff Goes Here</p>
      </Container>
    </Section>
  </Layout>
)

export default BEASTPage