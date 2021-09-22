import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const SocialShare = ({post}) => {
    let viewWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let sizeInit = 40
    if (viewWidth <= 480) {
        sizeInit = 25
    }
    const [size, setSize] = useState(sizeInit)
    
    useEffect(() => {
        if (typeof window !== `undefined`) {
            
            setSize(size)
            window.addEventListener('resize', () => {
                viewWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
                let x = 40
                if (viewWidth <= 480) {
                    x = 25
                }
                setSize(x)
                // console.info({viewWidth})
            });
            

        }
        
    }, [])
    
    const btnClass = 'round'
    const title = post.frontmatter.title
    const description = post.frontmatter.description ? post.frontmatter.description : post.excerpt
    const urlObj = new URL(window.location.href)
    const origin = urlObj.origin === 'http://localhost:8000' ? 'https://gatsby-netlify-cms-starter-template-plus.netlify.app' : urlObj.origin
    const pathname = urlObj.pathname
    const url = origin + pathname
    const keywords = post.frontmatter.keywords.split(',')
    let hashtags = []
    keywords.forEach( (v,i) => {
        v = v.replace(' ', '')
        v = v.replace(/ /g,"_")
        // v = `#${v}`
        console.info(v)
        hashtags.push(v)
    })

    const hashtag =`#${hashtags[0]}` 

    console.info({hashtags, hashtag})
        // console.info({post, urlObj, origin, pathname, url})
    return (
        <SocialBtnContainer>
            <EmailShareButton
                subject={title}
                body={description}
                url={`"${url}"`}
                separator=""
                className={btnClass}
            >
                <EmailIcon size={size}/>
            </EmailShareButton>
            <FacebookShareButton
                url={url}
                className={btnClass}
                hashtag={hashtag}
            >
                <FacebookIcon size={size}/>
            </FacebookShareButton>
            <LinkedinShareButton
                url={url}
                title={title}
                summary={'description'}
                className={btnClass}
            >
                <LinkedinIcon size={size}/>
            </LinkedinShareButton>
            <TwitterShareButton
                url={url}
                title={title}
                hashtags={hashtags}
                className={btnClass}
            >
                <TwitterIcon size={size}/>
            </TwitterShareButton>
            <RedditShareButton
                url={url}
                title={title}
                className={btnClass}
            >
                <RedditIcon size={size}/>
            </RedditShareButton>
            <WhatsappShareButton
                url={url}
                title={title}
                separator=""
                className={btnClass}
            >
                <WhatsappIcon size={size}/>
            </WhatsappShareButton>
        </SocialBtnContainer>
    )
}

export default SocialShare

const SocialBtnContainer = styled.div`
    display:flex;
    gap: 0.5rem;
    justify-content: center;
    padding: 1rem;
    position: sticky;
    bottom: 0;
    background: white;
    ${props => props.theme.xs`
        padding: 0.5rem;
    `}
    .round {
        svg {
            border-radius: 50%;
        }
    }
`