import "./src/styles/preloader.scss"
// import { scrollToElement } from 'scroll-to-element'


export const onRouteUpdate = ({ location }) => {
  // console.info('onRouteUpdate =>')
  // console.info({location})
  checkHash(location)
}

const checkHash = location => {
  console.info('checkHash =>')
  let { hash } = location
  // console.info({location, hash, scrollToElement})
  // var element = document.getElementById('sample_id');

// document.body.style.overflow = 'visible';
  if (hash) {
    // scrollToElement(hash, {
    //   offset: -80,
    //   duration: 1000,
    // })
  }
}

// export default onRouteUpdate