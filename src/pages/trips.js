import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Trips from '../components/Trips'

const TripsPage = () => (
  <Layout>
    <Seo title="Trips" />
    <Trips heading="Our Favourite Destinations" />
  </Layout>
)

export default TripsPage

