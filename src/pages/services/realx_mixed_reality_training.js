import React from "react"
import styled from "styled-components"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { Section, SectionHeader, Container } from '../../components/layout/Section'
import ContactUS from "../../components/contact/ContactUs"

const RealXPage = () => (
  <Layout>
    <Seo title="REAL-X Mixed Reality Emergency Medical Instruction & Training" />
    <StyledSection>
      <SectionHeader>
        <h1>REAL-X Mixed Reality Instruction & Training</h1>
      </SectionHeader>
      <StyledContainer>
        <ContentContainer>  
          <h3>The Problem</h3>
          <p>When instructors teach emergency medical skills, they must resort to 2D videos, slides, and ink-on-skin drawings to attempt to explain complex 3D anatomy and dynamic physiology.  When the instructors enter students into practical assessment, they require students to imagine a mechanism of injury and imagine changes in patient physiology often in a linear progression based on the students decision making and technical skill.  Unfortunately, this approach does not enable students to hone their skills and decision making in a realistic manner.</p>
        </ContentContainer>
        <ContentContainer>
          <h3>Our Solution</h3>
          <p>To improve instruction effectiveness and practical assessment realism, Link to Learn is developing REAL-X (Realistic Enhanced Augmented Learning Experience).  REAL-X immerses instructors and students in a shared mixed-reality classroom.  In a mixed-reality environment, 3D digital assets can be projected into the real world.  This enables instructors to call up 3D anatomical models and 3D animations to help students better visualize complex interventions.  It also enables the instructor to “bring the cadaver to life” with realistic mechanisms of injury and complex dynamic physiology that responds to a student’s decision making and technical skill.</p>
          <p>Students get to hone their expertise in a more realistic manner.  They must assess and adapt to their patients’ changing physiology.  They must key into complications that can happen randomly at any point in the practical assessment.  They must desensitize and focus through environmental stressors like screaming, gun shots, noise, blood and gore.</p>
          <p>The students will also receive quantifiable feedback based on their performance in the system as compared to peers and other experts.</p>
          <p>REAL-X is still in development and will be ready for broader beta testing in early 2022.</p>
          <p>Please Contact Us if you would like to beta test and provide feedback on REAL-X.</p>
        </ContentContainer>
      </StyledContainer>
    </StyledSection>
    <ContactUS />
  </Layout>
)

export default RealXPage

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