import React from 'react'
import styled from 'styled-components'
import { SectionHeader } from '../layout/Section'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Parallax, Background } from 'react-parallax'
const ContactSectionHeader = ({content}) => {
    // const content = data.content.frontmatter.contact_section_content
    const image = getImage(content.header_image)
    return (
        <ParallaxSectionHeader>
            <Parallax strength={-350}>
                <Background>
                    <GatsbyImage image={image}/>
                </Background>
                <div className="headerContent">
                    <h2>{content.header}</h2>
                    <p>{content.sub_header}</p>
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
            .gatsby-image-wrapper {
                width: -webkit-fill-available;
            }
        }
        img {
           width: 100vw;
           filter: blur(7px) brightness(150%);
           /* top: -10%; */
        }
        .react-parallax-content{
            display: flex;
            justify-content: center;
            .headerContent {
                padding: 9rem;
                display: flex;
                justify-content: center;
                flex-flow: column;
                align-items: center;
            }
        }
    }
`

export default ContactSectionHeader
