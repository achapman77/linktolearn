import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import {Link as ScrollLink} from 'react-scroll'
//components
import { Section, SectionHeader, Container } from '../layout/Section'
import { Button } from '../buttons/Button'

//icons
import { AiOutlineDoubleRight, AiFillInfoCircle } from 'react-icons/ai'
import VideoYoutube from '../videos/VideoYoutube'

const FAQs = () => {
    
    const data = useStaticQuery(graphql`
        query {
            faqs: markdownRemark(fileAbsolutePath: {regex: "/faq/"}) {
                frontmatter {
                    faq {
                        answer
                        question
                        select_category
                        blog_link
                        blog_title
                        video_link
                        video_title
                    }
                }
            }
        }
    `)

    const faqArr = data.faqs.frontmatter.faq
    
    const categoryArr = [...new Set(faqArr.map( ({select_category}) => select_category))]
    // console.info({faqArr, categoryArr })

    const toggleAnswer = (e) => {
        let t =  e.target.closest('li')
        t.classList.contains('active') ? t.classList.remove('active') : t.classList.add('active')
    }


    const toggleAllAnswers = (id,e) => {
        //toggle .active on btn
        let btn = e.target.closest('button')
        btn.classList.contains('active') ? btn.classList.remove('active') : btn.classList.add('active')

        //Find all category li and toggle .active
        let liArr = document.querySelectorAll(`#${id} li`)
        liArr.forEach( (t) => {
            btn.classList.contains('active') ? t.classList.add('active') : t.classList.remove('active')
        });
        
    }

    const [spacerHeight, setSpacerHeight] = useState(0)
    const [categoryBtnNavWrapperHeight, setCategoryBtnNavWrapperHeight ] = useState(130)
    useEffect(() => {
    if (typeof window !== `undefined`) {
        //get screen height
        let screenHeight = window.innerHeight
        
        //get heights of: navbar, categoryBtnNav, footer, and last category
        let navHeight = document.getElementById('navbar').offsetHeight
        let categoryBtnNavHeight = document.getElementById('categoryBtnWrapper').offsetHeight
        setCategoryBtnNavWrapperHeight(categoryBtnNavHeight)
        let footerHeight = document.getElementById('footer').offsetHeight
        let lastCategoryID = document.getElementById('categoryList').lastChild.id
        let lastCategoryHeight = document.getElementById(lastCategoryID).offsetHeight
        
        // calc spacerHeight required to enable scroll
        let spacerHeight = screenHeight - (navHeight + categoryBtnNavHeight + footerHeight + lastCategoryHeight + 90 )
        if (spacerHeight >=0 ) {
           setSpacerHeight(spacerHeight + 100) 
        }
        console.info({screenHeight, navHeight, categoryBtnNavHeight, lastCategoryHeight, footerHeight, spacerHeight})
    }
  }, [])

    return (
        <StyledSection>
            <StyledHeader>
                <h2>How Can We Help You?</h2>
                <p>Below you'll find answers to the questions we get asked the most.  If you don't find the answer you need please Call Us.</p>
            </StyledHeader>
            <CategoryBtnWrapper id="categoryBtnWrapper">
                { categoryArr.map( (v,i) => {
                    return (
                        <CategoryBtn 
                            key={i} 
                            to={`categoryID_${i}`}
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-categoryBtnNavWrapperHeight - 60}
                            // onClick={e => scrollToCategory(i,e)}
                            // ref={ () => btnIDs.current.push(`btnID_${i}`)}
                        >
                            {v}
                        </CategoryBtn>
                    )
                })}
            </CategoryBtnWrapper>
            <StyledContainer>
                <Wrapper>
                    <CategoryList id="categoryList">
                        {categoryArr.map( (v,i) =>          
                            <CategoryListSection key={i} id={`categoryID_${i}`}>
                                <Title>
                                    <ToggleAllBtn
                                        onClick={e => toggleAllAnswers(`categoryID_${i}`, e)}
                                    >
                                        <StyledIcon/>
                                    </ToggleAllBtn>
                                    {v}
                                </Title>
                                <FAQList >
                                    { faqArr.map( (v2,i2) => {
                                        if (v2.select_category === v) {
                                            const id=`${i}_${i2}`
                                            return (
                                                <li key={i2}
                                                    id={id}
                                                    
                                                >
                                                    <button
                                                        onClick={e => toggleAnswer(e)}
                                                    >
                                                        <p className='question'>
                                                            <AiOutlineDoubleRight className='caretRight'/>
                                                            {v2.question}
                                                        </p>
                                                        <div className="details">
                                                            <div className="info">
                                                                <p className='answer'>{v2.answer}</p>
                                                                {v2.blog_link &&
                                                                    <Button primary="true" round="true" to={v2.blog_link}><AiFillInfoCircle/> Learn More</Button>
                                                                }
                                                            </div>
                                                            {v2.video_link && 
                                                                <VideoContainer>
                                                                    <VideoYoutube videoSrcURL={v2.video_link} videoTitle={v2.video_title}/>
                                                                </VideoContainer>
                                                            }
                                                            
                                                        </div>
                                                    </button>
                                                </li>
                                            )
                                        } else {
                                            return(<></>)
                                        }
                                    })}
                                </FAQList>
                            </CategoryListSection>
                        )}
                    </CategoryList>
                    <div className="spacer" style={{height:spacerHeight}}></div>
                </Wrapper>
            </StyledContainer>
        </StyledSection>
    )
}

export default FAQs

const StyledSection = styled(Section)`
    padding-top: 0;
`
const StyledHeader = styled(SectionHeader)`
    padding: 5rem 0 2rem 0;
    p {
        max-width: 80vw;
        ${props => props.theme.md`
            
        `}
        ${props => props.theme.sm`
           
        `}
    }
`
const StyledContainer = styled(Container)`
    /* max-width: fit-content */
`
const Wrapper = styled.div`
    width: -webkit-fill-available;
    color: ${props => props.theme.colors.gray.dark};
    max-width: 70rem;
    margin: 0 1rem;
    ul {
        list-style: none;
    }

`
const CategoryBtnWrapper = styled.div`
    position: sticky;
    top: 80px;
    width: 100vw;
    background: white;
    display: flex;
    justify-content: center;
    gap: clamp(0.5rem, 2vw, 2rem);
    padding: 1.5rem;
    z-index: 50;
    ${props => props.theme.sm`
        flex-wrap:wrap;
    `}
    ${props => props.theme.xs`
        display:none;
    `}
`
const CategoryBtn = styled(ScrollLink)`
    padding: clamp(0.5rem, 2vw, 2rem) clamp(0.5rem, 2vw, 1rem);
    font-weight: bold;
    font-size: clamp(1rem, 2vw, 1.5rem);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: clamp(10rem, 20vw, 16rem);
    &:hover, &.active {
        background: ${props => props.theme.colors.secondary.light};
        color: white;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
    ${props => props.theme.sm`
        min-height: 55px;
        width: 48%;
    `}
    ${props => props.theme.xs`
        min-height: 55px;
        width: 100%;
    `}
`
const CategoryList = styled.ul`
        
`
const CategoryListSection = styled.li`
        padding: 2rem 0;
`
const Title = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme.colors.secondary.main};
    border-bottom: 2px solid ${props => props.theme.colors.secondary.main};
    padding-bottom: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: left;
`
const ToggleAllBtn = styled.button`
    background: ${props => props.theme.colors.secondary.main};
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;
    border-radius: 3px;
    transition: 250ms transform;
    &.active {
        transition: 250ms transform;
        transform: rotate(90deg);
    }
`
const StyledIcon = styled(AiOutlineDoubleRight)`
`

const FAQList = styled.ul`
    li {
        /* padding-left: 1rem; */
        /* padding-bottom: 1rem; */
        margin: 0;
        border-bottom: 1px solid lightgray;
        button {
            border: none;
            background: transparent;
            width: -webkit-fill-available;
        }
        .question {
            font-weight: bold;
            border-left: 7px solid transparent;
            /* line-height: 3rem; */
            padding: 1rem 0.5rem;
            display: flex;
            align-items: center;
            user-select: none;
            svg {
                margin-right: 0.75rem;
                color: ${props => props.theme.colors.gray.dark};
            }
        }
        .details {
            display: none;
            padding: 0.5rem 1.25rem 1rem 48px;
            user-select: none;
            gap: 2rem;
            ${props => props.theme.md`
                flex-wrap:wrap;
                gap: 1rem;
            `}
            ${props => props.theme.xs`
                padding: 0.5rem 1rem;
            `}
        }
        .answer {
            margin-bottom: 1rem;
            max-width: 45rem;
        }
        .info {
            
        }
        .caretRight {
            transition: 250ms transform;
        }
        &:hover, &.active {
            background: ${props => props.theme.colors.gray.light};
            .question {
                border-left: 7px solid ${props => props.theme.colors.secondary.main};
                svg {
                    color: ${props => props.theme.colors.secondary.main};
                }
            }
        }
        &.active {
            .details {
                display: flex;
                
            }
            .caretRight {
                transition: 250ms transform;
                transform: rotate(90deg);
            }
        }
    }
`



const VideoContainer = styled.div`
    /* border: 1px solid red;
    width: 15%;
    height: auto; */
`