import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Blog, BlogList } from '../blog'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../user.interface'

interface BlogEditorialProps {
  user: User
}

function BlogEditorial({ user }: BlogEditorialProps) {
  const [blogList, setBlogs] = useState(null as null | BlogList)

  const history = useHistory()

  useEffect(() => {
    async function loadBlogs() {
      const response = await Axios.get(`${process.env.REACT_APP_PROXY}/blogs`)
      setBlogs( { blogs: response.data.blogs })
    }

    loadBlogs()
  }, [])

  const addBlog = async () => {
    const currDate = new Date().toDateString()
    const blogID = uuidv4()

    const response = await Axios.post(`${process.env.REACT_APP_PROXY}/add-blog`, {
      uid: blogID,
      name: 'New Blog Name',
      author: user.name,
      date: currDate,
      content: "Enter blog content here!"
    } as Blog, { withCredentials: true })
    if (response.data.success) {
      history.push(`/blog-edit/${blogID}`)
    }
  }

  return (
    <section className="blog-editorial">
      <h2>Published blogs</h2>
      { blogList && <div className="blog-list">
        { blogList.blogs.length > 0 ?
          (blogList.blogs.map((blog) => (
          <Link
            to={`/blog-edit/${blog.uid}`}
            // className="blog-container"
            key={blog.uid}
          >
            <h4>{ blog.name }</h4>
            <p>{ blog.author }</p>
            <p> { blog.date }</p>
          </Link>
        ))) : <p>No blogs yet...</p> }
        <button onClick={addBlog}>Add Blog</button>
      </div>}
    </section>
  )
}

export default BlogEditorial
