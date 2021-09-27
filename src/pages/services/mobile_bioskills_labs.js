import React from "react"
import styled from "styled-components"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { Section, SectionHeader, Container } from '../../components/layout/Section'
import ContactUS from "../../components/contact/ContactUs"

const MobileBioSkillsLabsPage = () => (
  <Layout>
    <Seo title="Mobile BioSkills Lab for Emergency Medical Training" />
    <StyledSection>
      <SectionHeader>
        <h1>Mobile BioSkills Labs</h1>
      </SectionHeader>
      <StyledContainer>
        <ContentContainer>  
          <h3>The Problem</h3>
          <p>Emergency medical training on real human anatomy is crucial. Only the real thing can provide the tactile feel and variation of anatomy that is required for skill mastery.  Unfortunately, the logistical hurdles of traveling to and from labs along with the high costs of acquiring cadavers prevent many frontline emergency medical personnel from honing their skills on cadavers more than once a year.</p>
        </ContentContainer>
        <ContentContainer>
          <h3>Our Solution</h3>
          <p>To improve access and cost-efficiency for cadaveric training, Link to Learn offers a turn-key mobile cadaveric lab solution that is deployable anywhere in the US.  Each refrigerated vehicle in the fleet is capable of carrying 8 cadavers and setting up in austere field training conditions with onboard power generation.  To further optimize training, the cadavers are preserved through a proprietary method that helps ensure the most lifelike tissue consistency and color possible.  Surgical equipment and expert trainers are available upon request.</p>
          <p>Pricing for this service is a combination of distance, duration, number of cadavers as well as number of instructors and equipment required.</p>
          <p>Please Call Us between 8a - 8p to discuss a customized solution for your team.</p>
        </ContentContainer>
      </StyledContainer>
    </StyledSection>
    <ContactUS />
  </Layout>
)

export default MobileBioSkillsLabsPage
const StyledSection = styled(Section)`
  padding-top: 0;
  min-height: fit-content;
`

const StyledContainer = styled(Container)`
  max-width: 65rem;
  padding: 0;
  flex-flow: column;
  gap: 4rem;
  align-items: baseline;
  margin: 0 clamp(1rem, 5vw, 4rem);
  p {
    line-height: 2rem;
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1.5rem;
`