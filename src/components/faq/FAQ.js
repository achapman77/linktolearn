import React, {useRef, useState, useEffect} from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Section, SectionHeader, Container } from '../layout/Section'
import {Link as ScrollLink} from 'react-scroll'
//icons
import { AiOutlineDoubleRight } from 'react-icons/ai'
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
                        video_link
                    }
                }
            }
        }
    `)

    const faqArr = data.faqs.frontmatter.faq
    
    const categoryArr = [...new Set(faqArr.map( ({select_category}) => select_category))]
    console.info({faqArr, categoryArr })

    const toggleAnswer = (e) => {
        let t =  e.target.closest('li')
        t.classList.contains('active') ? t.classList.remove('active') : t.classList.add('active')
    }

    const [spacerHeight, setSpacerHeight] = useState(0)
    useEffect(() => {
    if (typeof window !== `undefined`) {
        //get screen height
        let screenHeight = window.screen.height
        
        //get heights of: navbar, categoryBtnNav, footer, and last category
        let navHeight = document.getElementById('navbar').offsetHeight
        let categoryBtnNavHeight = document.getElementById('categoryBtnWrapper').offsetHeight
        let footerHeight = document.getElementById('footer').offsetHeight
        let lastCategoryID = document.getElementById('categoryList').lastChild.id
        let lastCategoryHeight = document.getElementById(lastCategoryID).offsetHeight
        

        let spacerHeight = screenHeight - (navHeight + categoryBtnNavHeight + footerHeight + lastCategoryHeight + 90 )

        console.info({screenHeight, navHeight, categoryBtnNavHeight, lastCategoryHeight, footerHeight, spacerHeight})

        if (spacerHeight >=0 ) {
           setSpacerHeight(spacerHeight) 
        }
    }
  }, [])

    return (
        <StyledSection>
            <StyledHeader>
                <h2>How Can We Help You?</h2>
                <p>Below you'll find answers to the questions we get asked the most.</p>
                <p>If you don't find the answer you need please call or leave a comment below.</p>
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
                            offset={-190}
                            // onClick={e => scrollToCategory(i,e)}
                            // ref={ () => btnIDs.current.push(`btnID_${i}`)}
                        >
                            {v}
                        </CategoryBtn>
                    )
                })}
            </CategoryBtnWrapper>
            <Container>
                <Wrapper>
                    <CategoryList id="categoryList">
                        {categoryArr.map( (v,i) =>          
                            <CategoryListSection key={i} id={`categoryID_${i}`}>
                                <Title>{v}</Title>
                                <FAQList >
                                    { faqArr.map( (v2,i2) => {
                                        if (v2.select_category === v) {
                                            const id=`${i}_${i2}`
                                            return (
                                                <li key={i2}
                                                    id={id}
                                                    onClick={e => toggleAnswer(e)}
                                                >
                                                    <p className='question'>
                                                        <AiOutlineDoubleRight className='caretRight'/>
                                                        
                                                        {v2.question}
                                                    </p>
                                                    <p className='answer'>{v2.answer}</p>
                                                </li>
                                            )
                                        }
                                    })}
                                </FAQList>
                            </CategoryListSection>
                        )}
                    </CategoryList>
                    <div className="spacer" style={{height:spacerHeight}}></div>
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default FAQs

const StyledSection = styled(Section)`
    padding-top: 0;
`
const StyledHeader = styled(SectionHeader)`
    padding: 5rem 0 2rem 0;
`

const Wrapper = styled.div`
    width: -webkit-fill-available;
    color: ${props => props.theme.colors.gray.dark};
    max-width: 55rem;
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
    gap: 2rem;
    padding: 1.5rem;
`
const CategoryBtn = styled(ScrollLink)`
    padding: 2rem;
    font-weight: bold;
    font-size: 1.5rem;
    max-width: 200px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    &.active {
        background: ${props => props.theme.colors.secondary.light};
        color: white;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
`
const CategoryList = styled.ul`
        
`
const CategoryListSection = styled.li`
        padding: 2rem 0;
`
const FAQList = styled.ul`
    li {
        /* padding-left: 1rem; */
        /* padding-bottom: 1rem; */
        margin: 0;
        border-bottom: 1px solid lightgray;
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
        .answer {
            display: none;
            margin-left: 48px;
            margin-top: 0.5rem;
            padding-bottom: 1rem;
            user-select: none;
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
            .answer, .caretDown {
                display: block;
            }
            .caretRight {
                transition: 250ms transform;
                transform: rotate(90deg);
            }
        }
    }
`

const Title = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme.colors.secondary.main};
    border-bottom: 2px solid ${props => props.theme.colors.secondary.main};
    padding-bottom: 0.25rem;
`