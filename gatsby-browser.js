const scrollToElement = require('scroll-to-element')
// import { scrollToElement } from 'scroll-to-element'
exports.onRouteUpdate = ({ location }) => {
  checkHash(location)
}

const checkHash = location => {
  let { hash } = location
  if (hash) {
    scrollToElement(hash, {
      offset: -80,
      duration: 1000,
    })
  }
}