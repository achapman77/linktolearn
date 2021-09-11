import React from "react"
import Layout from "./src/components/Layout"
// import styled from "styled-components"
import logo from './src/assets/images/logos/logo_main.png'


const onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents
}) => {
  setHeadComponents([
    <link as="script" rel="preload" href="/scripts/preloader.js" />,
    <noscript>
      <link rel="stylesheet" href="/styles/noscript.css" />
    </noscript>
  ])
  setPreBodyComponents([
    <div id="preloader">
      {/* Optional: */}
      <img src={logo} alt="logo" />
      {/* <div className="preloader_animation"></div> */}
      <div data-loader='500px-spinner'></div>
    </div>
  ])
  setBodyAttributes({
    className: "preloader_active"
  })
  setPostBodyComponents([
    <script src="/scripts/preloader.js" />
  ])
}

// Wraps every page in a component
const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export {onRenderBody, wrapPageElement }
