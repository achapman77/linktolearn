import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useFlexSearch } from "react-use-flexsearch"
import * as queryString from "query-string"
import PostCard from "./PostCard"
import { FloatingLabel } from "../form/FloatingLabel"

// import { rhythm } from "../utils/typography"



const SearchedPosts = ({ results }) =>
  results.length > 0 ? (
    results.map(node => {
      const date = node.date
      const title = node.title || node.slug
      const description = node.description
      const excerpt = node.excerpt
      const slug = node.slug

      return (
        <PostCard node={node} title={title} className="searchResultPost" />
      )
    })
  ) : (
    <p style={{ textAlign: "center" }}>
      Sorry, couldn't find any posts matching this search.
    </p>
  )

const AllPosts = ({ posts }) => (
  <>
    <BlogSection>
      <Header>
        <span>Featured Story</span>
        <hr/>
      </Header>
      
      {posts.map( ( {node} ) => {
        const title = node.frontmatter.title || node.slug
        console.info({node})
        return (
          <>
          {node.frontmatter.featured_blog &&
            <PostCard node={node} title={title} className="featuredPost"/>
          }
          </>
        )
      })}
    </BlogSection>
    <BlogSection>
      <Header>
        <span>Recent Articles</span>
        <hr/>
      </Header>
      <Wrapper>
        {posts.map( ({node}) => {
          const title = node.frontmatter.title || node.slug
          return (
            <>
            {node.frontmatter.featured_blog === false &&
              <PostCard node={node} title={title} className="listPost" />
            }
            </>
          )
        })}
      </Wrapper>
      
    </BlogSection>

      
    
  </>
)

const SearchPosts = ({ posts, localSearchBlog, location, navigate }) => {
  const { search } = queryString.parse(location.search)
  const [query, setQuery] = useState(search || "")

//   console.info({posts, index:localSearchBlog.index, store:localSearchBlog.store, location, navigate})
  
  const results = useFlexSearch(
    query,
    localSearchBlog.index,
    localSearchBlog.store
  )
  
  console.info({results})

  return (
    <>
      <SearchBar>
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          id="search"
          type="search"
          placeholder="Search All Posts"
          value={query}
          onChange={e => {
            navigate(
              e.target.value ? `/blog/?search=${e.target.value}` : "/blog/"
            )
            setQuery(e.target.value)
          }}
        />
      </SearchBar>
      {query ? <SearchedPosts results={results} /> : <AllPosts posts={posts} />}
    </>
  )
}

export default SearchPosts

const SearchBar = styled.div`
  display: flex;
  border: none;
  border-bottom: 3px solid ${props => props.theme.colors.gray.main};;
  border-radius: 0px;
  margin: 0 auto;
  width: 100%;
  height: 3rem;
  background: transparent;
  color: ${props => props.theme.colors.gray.main};

  svg {
    margin: auto 1rem;
    height: clamp(1rem,5vw,1.5rem);;
    width: clamp(1rem,5vw,1.5rem);;
    color:${props => props.theme.colors.gray.main};;
    fill: ${props => props.theme.colors.gray.main};;
  }

  input {
    display: flex;
    flex: 100%;
    height: 100%;
    font-size: clamp(1rem,5vw,1.5rem);;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 1rem 0;
    padding-right: 0.5rem;
    color: ${props => props.theme.colors.gray.main};;
    word-wrap: break-word;
    outline: none;
    &::placeholder {
      color: ${props => props.theme.colors.gray.main};
    }
  }
`

const BlogSection = styled.div`
  width: -webkit-fill-available;
  
`

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  span {
    background: ${props => props.theme.colors.gray.dark};
    color: white;
    padding: 0.5rem 2rem;
    white-space: nowrap;
    margin-right: 0.5rem;
  }
  hr {
    width: -webkit-fill-available;
  }
`

const Wrapper = styled.div`
  /* display: flex;
  gap: 1rem;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  ${props => props.theme.lg`
      grid-template-columns: repeat(2, 1fr);
  `}
  ${props => props.theme.sm`
      grid-template-columns: repeat(1, 1fr);
  `}
`
