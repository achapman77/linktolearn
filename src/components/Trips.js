// import React, {useEffect} from 'react'
// import styled from 'styled-components'
// import { useStaticQuery, graphql } from 'gatsby'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import { Button } from './buttons/Button'
// import { ImLocation } from 'react-icons/im'
// import Aos from 'aos'
// import "aos/dist/aos.css"


// const Trips = ({heading}) => {
//     const data = useStaticQuery(graphql`
//         query TripsQuery {
//             allTripsJson {
//                 edges {
//                     node {
//                         alt
//                         button
//                         name
//                         id
//                         img {
//                             childImageSharp {
//                                 gatsbyImageData
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     `)
//     useEffect( () => {
//         Aos.init({})
//     }, [])

//     function getTrips(data) {
//         const tripsArr = []
//         data.allTripsJson.edges.forEach((v,i)=>{
//             let image = getImage(v.node.img)
//             tripsArr.push(
//                 <ProductCard key={v.node.id}
//                     data-aos="fade-down"
//                     data-aos-delay="50"
//                     data-aos-duration="1000"
//                 >
//                     <ProductImage image={image} alt={v.node.alt}/>
//                     <ProductInfo>
//                         <TextWrap>
//                             <ImLocation/>
//                             <ProductTitle>{v.node.name}</ProductTitle>
//                         </TextWrap>
//                         <Button to="/trips" primary="true"
//                         round="true" css={`position:absolute; top:420px; font-size:14px;`}>{v.node.button}</Button>
//                     </ProductInfo>
//                 </ProductCard>
//             )
//         })
//         return tripsArr
//     }
    
//     return (
//         <ProductsContainer id='trips'>
//             <ProductsHeading>{heading}</ProductsHeading>
//             <ProductWrapper>{getTrips(data)}</ProductWrapper>
//         </ProductsContainer>
//     )
// }

// export default Trips

// const ProductsContainer = styled.section`
//     min-height: 100vh;
//     padding: 5rem calc((100vw - 2000px) / 2 );
//     color: #fff;

// `

// const ProductsHeading = styled.div`
//     font-size: clamp(1.2rem, 5vw, 3rem);
//     text-align: center;
//     margin: 5rem 0;
//     color: #000;
// `

// const ProductWrapper = styled.div`
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-gap: 10px;
//     justify-items: center;
//     padding: 0 2rem;

//     @media screen and (max-width: 1200px) {
//         grid-template-columns: 1fr 1fr;
//     }

//     @media screen and (max-width: 868px) {
//         grid-template-columns: 1fr;
//     }
// `
// const ProductCard = styled.div`
//     line-height: 2;
//     width: 100%;
//     height: 500px;
//     position: relative;
//     border-radius: 10px;
//     transition: 0.2s ease;
// `

// const ProductImage = styled(GatsbyImage)`
//     height: 100%;
//     max-width: 100%;
//     position: relative;
//     border-radius: 10px;
//     filter: brightness(70%);
//     transition: 0.4s cubic-bezier(0.075,0.82,0.165,1);

//     &:hover {
//         filter: brightness(100%);
//     }
// `

// const ProductInfo = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 0 2rem;

//     @media screen and (max-width: 280px) {
//         padding: 0 1rem;
//     }
// `
// const TextWrap = styled.div`
//     display: flex;
//     align-items: center;
//     position: absolute;
//     top: 375px;
// `
// const ProductTitle = styled.div`
//     font-weight: 400;
//     font-size: 1rem;
//     margin-left: 0.5rem;
// `
