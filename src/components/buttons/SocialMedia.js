import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'

//animation
import Aos from 'aos'
import "aos/dist/aos.css"

const SocialMedia = ({variant, animate, delay}) => {

    const data = useStaticQuery(graphql`
        query {
            social_media: markdownRemark(fileAbsolutePath: {regex: "/social_media/"}) {
                id
                frontmatter {
                    social_media {
                        select_social_media
                        profile_link
                    }
                }
            }
            
        }
    `)
    const socialMedia = data.social_media.frontmatter.social_media
    // console.info({variant, animate})
    useEffect( () => {
        Aos.init({})
    }, [])
    return (
        <SocialMediaWrapper className={variant}>
            {
                socialMedia.map( (v,i) => {
                    let icon
                    if (v.select_social_media === 'LinkedIn') {
                        icon = <AiFillLinkedin/>
                    }
                    else if (v.select_social_media === 'Facebook') {
                        icon = <AiFillFacebook/>
                    }
                    else if (v.select_social_media === 'Instagram') {
                        icon = <AiFillInstagram/>
                    }
                    else if (v.select_social_media === 'Twitter') {
                        icon = <AiFillTwitterSquare/>
                    }
                    if (animate) {
                        return(
                            <SocialIcon 
                                href={v.profile_link} 
                                target="_blank" 
                                rel="noreferrer" 
                                title={v.select_social_media}
                                data-aos="flip-down"
                                data-aos-delay={delay + (i * 100)}
                                data-aos-duration="1000"
                                className={variant}
                                key={i}
                            >
                                {icon}
                            </SocialIcon>
                        )

                    } else {
                        return(
                            <SocialIcon href={v.profile_link} target="_blank" rel="noreferrer" title={v.select_social_media} className={variant}  key={i}>{icon}</SocialIcon>
                        )
                    }
                    
                })
            }
        </SocialMediaWrapper>
    )
}

export default SocialMedia

const SocialMediaWrapper = styled.div`
    /* margin-left: auto; */
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &.contactInfo {
        gap: 1.25rem;
    }
`
const SocialIcon = styled.a`
    color: white;
    font-size: 1.5rem;
    margin-bottom: -5px;
    &.contactInfo {
        font-size: 2rem;
        &:hover svg{
           color: ${props => props.theme.colors.primary.main}; 
        }
    }

    &.footer {
        color: black;
    }

    /* &.navTopper {
        &:hover svg{
           color: ${props => props.theme.colors.primary.main}; 
        }
    } */
`
