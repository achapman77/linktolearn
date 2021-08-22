import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
// import Email from "../components/Email"
import ContactUS from "../components/contactSection/ContactUs"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our Favourite Destinations"/>
    <Testimonials/>
    <Stats/>
    {/* <Email/> */}
    <ContactUS/>
  </Layout>
)

export default IndexPage
