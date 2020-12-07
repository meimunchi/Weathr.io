import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { BlogList } from '../blog'

function BlogEditorial() {
  const [blogList, setBlogs] = useState(null as null | BlogList)

  useEffect(() => {
    async function loadBlogs() {
      const response = await Axios.get(`${process.env.REACT_APP_PROXY}/get-blogs`)
      setBlogs( { blogs: response.data.blogs })
    }

    loadBlogs()
  }, [])

  return (
    <section>
      <h2>Published blogs</h2>
      { blogList && <div>
        { blogList.blogs.map((blog) => (
          <div key={blog.uid}>
            <h4>{ blog.name }</h4>
            <p>{ blog.author }</p>
            <p> { blog.date }</p>
          </div>
        )) }
      </div>}
    </section>
  )
}

export default BlogEditorial
