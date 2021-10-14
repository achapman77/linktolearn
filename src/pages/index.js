import React from "react"
import loadable from "@loadable/component"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import ProductSection from "../components/products/ProductSection"
// import ClientsSection from "../components/clients/ClientsSection"
import PartnersSection from "../components/partners/PartnersSection"
// import TeamSection from "../components/team/Team"
// import ContactUS from "../components/contact/ContactUs"


//loadable components
const ClientsSection = loadable( () => import("../components/clients/ClientsSection"))
const TeamSection = loadable( () => import("../components/team/Team"))
const ContactUS = loadable( () => import("../components/contact/ContactUs"))

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <ProductSection />
    <ClientsSection />
    <PartnersSection />
    <TeamSection />
    <ContactUS/>
  </Layout>
)

export default IndexPage
