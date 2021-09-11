import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
// import Email from "../components/Email"
import ContactUS from "../components/contact/ContactUs"
import TeamSection from "../components/team/Team"
import TestimonialCarousel from "../components/testimonials/TestimonialCarousel"
// import TestimonialMarqueeSlider from "../components/testimonials/TestimonialMarqueeSlider"
import TestimonialMarqueeFast from "../components/testimonials/TestimonialMarqueeFast"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    {/* <Trips heading="Our Favourite Destinations"/> */}
    {/* <Testimonials/> */}
    {/* <Stats/> */}
    {/* <Email/> */}
    <TestimonialMarqueeFast/>
    {/* <TestimonialMarqueeSlider/> */}
    <TestimonialCarousel/>
    <TeamSection />
    <ContactUS/>
  </Layout>
)

export default IndexPage
