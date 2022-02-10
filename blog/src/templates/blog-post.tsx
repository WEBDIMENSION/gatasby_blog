// import React, {FC} from "react"
import * as React from "react"
import {Link, graphql} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import PageTitle from "../components/pageTitle"

interface Props {
  data: {
    markdownRemark: {
      id: number
      excerpt: string
      html: string
      frontmatter: {
        title: string
        date: string
        post_modified: string
        description
        tags: string[]
        draft: boolean
      }
    }
    site: {
      siteMetadata: {
        title: string
      }
    }
    previous: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
    next: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }

  }
}

//
const BlogPost = ({data}: Props) => {
  // const BlogPost = () => {
// const BlogPost: React.FC<PageProps<GatsbyTypes.BlogPostBySlugQuery>> = ({data}) => {

  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const {previous, next} = data

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <ArticleWrapper
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <PageTitle title={post.frontmatter.title} prefixTitle=""/>
        </header>
        <p className="postDate"><span>{post.frontmatter.date}</span></p>
        {
          (() => {
            if (post.frontmatter.draft) {
              return(
                <div className={"draft"}>Draft</div>
              );
            }
          })()
        }
        <section
          dangerouslySetInnerHTML={{__html: post.html}}
          itemProp="articleBody"
        />
        <hr/>
        {/*<footer>*/}
        {/*  <Bio/>*/}
        {/*</footer>*/}
      </ArticleWrapper>
      <nav className="blog-post-nav">
        <ul
        >
          <li>
            {previous && (
              <Link to={'/blog' + previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={'/blog' + next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPost

const ArticleWrapper = styled.article`
  header {
    margin-bottom: 1em;
    border-bottom: 1px var(--colorPrimary) dashed;
  }
  
  .draft {
    background-color: var(--colorWarning);
    color: var(--bgColorPrimary);
    //display: inline-block;
    padding: 4px;
    border-radius: 4px;
    text-align: center;
    font-weight: bolder;
  }

  P.postDate {
    text-align: end;

    span {
      color: var(--colorSecondary);
    }
  }

  section {
    margin-top: 1em;
    border-radius: 8px;
    background-color: var(--bgColorScondary);
    padding: 0.5em;

    //h1 {
    //  display: none;
    //}
  }
`


export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        post_modified(formatString : "MMMM DD, YYYY" )
        description
        tags
        draft
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
