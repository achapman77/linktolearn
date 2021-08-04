import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"

const About = () => (
  <Layout>
    <Seo title="About Us" />
    <Testimonials/>
    <Stats/> 
  </Layout>
)

export default About

