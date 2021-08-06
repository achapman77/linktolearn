import React from "react"
import ContactForm from "../components/ContactForm"

import Email from "../components/Email"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our Favourite Destinations"/>
    <Testimonials/>
    <Stats/>
    <Email/>
    <ContactForm/>
  </Layout>
)

export default IndexPage
