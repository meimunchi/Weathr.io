import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import Axios from 'axios'
import { Blog } from '../blog'
import ReactHtmlParser from 'react-html-parser'
import './blog-page.css'

interface BlogParams {
  id: string
}

interface BlogPageProps extends RouteComponentProps<BlogParams>{
}

function BlogPage({ match }: BlogPageProps) {
  const [blog, setBlog] = useState(null as null | Blog)

  useEffect(() => {
    async function loadBlogs() {
      const response = await Axios.post(`${process.env.REACT_APP_PROXY}/blog`, { uid: match.params.id })
      setBlog(response.data.blog)
    }

    loadBlogs()
  }, [match.params.id])

  console.log(blog)

  return (
      <div className={"page"}>
        <div>{ blog && ReactHtmlParser(blog.content) }</div>
      </div>
  )
}

export default BlogPage
