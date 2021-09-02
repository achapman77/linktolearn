import "./src/styles/preloader.scss"
import { scrollToElement } from 'scroll-to-element'

const onRouteUpdate = ({ location }) => {
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

export default onRouteUpdate