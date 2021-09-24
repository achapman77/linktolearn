import React from "react"
import loadable from "@loadable/component"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

// import Trips from "../components/Trips"
// import Testimonials from "../components/Testimonials"
// import Stats from "../components/Stats"
// import Email from "../components/Email"
import ContactUS from "../components/contact/ContactUs"
import TeamSection from "../components/team/Team"

//loadable components
const TestimonialMarqueeFast = loadable( () => import("../components/testimonials/TestimonialMarqueeFast"))
const TestimonialCarousel = loadable( () => import("../components/testimonials/TestimonialCarousel"))
// const TestimonialMarqueeSlider = loadable( () => import("../components/testimonials/TestimonialMarqueeSlider"))

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    {/* <Trips heading="Our Favourite Destinations"/> */}
    {/* <Testimonials/> */}
    {/* <Stats/> */}
    {/* <Email/> */}
    
    {/* <TestimonialMarqueeFast/> */}
    {/* <TestimonialCarousel/> */}
    {/* <TestimonialMarqueeSlider/> */}
    <TeamSection />
    <ContactUS/>
  </Layout>
)

export default IndexPage
