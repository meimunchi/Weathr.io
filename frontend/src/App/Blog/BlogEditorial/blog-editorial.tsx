import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { BlogList } from '../blog'
import { Link } from 'react-router-dom'

function BlogEditorial() {
  const [blogList, setBlogs] = useState(null as null | BlogList)

  useEffect(() => {
    async function loadBlogs() {
      const response = await Axios.get(`${process.env.REACT_APP_PROXY}/blogs`)
      setBlogs( { blogs: response.data.blogs })
    }

    loadBlogs()
  }, [])

  console.log(blogList)

  return (
    <section className="blog-editorial">
      <h2>Published blogs</h2>
      { blogList && <div className="blog-list">
        { blogList.blogs.map((blog) => (
          <Link
            to={`/blog-edit/${blog.uid}`}
            // className="blog-container"
            key={blog.uid}
          >
            <h4>{ blog.name }</h4>
            <p>{ blog.author }</p>
            <p> { blog.date }</p>
          </Link>
        )) }
      </div>}
    </section>
  )
}

export default BlogEditorial
