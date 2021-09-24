import React from 'react'
import styled from 'styled-components'
import { SectionHeader } from '../layout/Section'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Parallax, Background } from 'react-parallax'
const ContactSectionHeader = ({content}) => {
    // const content = data.content.frontmatter.contact_section_content
    // console.info({content})
    const image = getImage(content.header_image)
    return (
        <ParallaxSectionHeader>
            <Parallax strength={-350}>
                <Background>
                    <GatsbyImage image={image} alt="Contact Section Background Image"/>
                </Background>
                <div className="headerContent">
                    <h2 className="headerTitle">{content.header}</h2>
                    <p className="subTitle">{content.sub_header}</p>
                </div>
            </Parallax>
        </ParallaxSectionHeader>
    )
}

const ParallaxSectionHeader = styled(SectionHeader)`
    .react-parallax {
        width: -webkit-fill-available;
        .react-parallax-background-children {
            width: -webkit-fill-available;
            ${props => props.theme.md`
                top:20%;
            `}
            ${props => props.theme.sm`
                display: none;
            `}
            .gatsby-image-wrapper {
                width: -webkit-fill-available;
            }
        }

        img {
           width: 100vw;
           filter: blur(5px) brightness(110%);
           /* filter: blur(7px) brightness(150%); */
           /* top: -10%; */
        }
        .react-parallax-content{
            display: flex;
            justify-content: center;
            .headerContent {
                padding: clamp(1rem, 5vw, 9rem);
                display: flex;
                justify-content: center;
                flex-flow: column;
                align-items: center;
                ${props => props.theme.sm`
                    padding: 1rem;
                `}
                .headerTitle {
                    text-align: center;
                }
                .subTitle {
                    max-width: 50rem;
                    text-align: center;
                }
            }
        }
    }
`

export default ContactSectionHeader
