import React, { useEffect, useState } from 'react'
import { RouteComponentProps, useHistory } from 'react-router'
import Axios from 'axios'
import { Blog } from '../blog'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './blog-edit.css'

interface BlogEditParams {
  id: string
}

interface BlogEditProps extends RouteComponentProps<BlogEditParams>{
}

function BlogEdit({ match }: BlogEditProps) {
  const [blog, setBlog] = useState(null as null | Blog)

  const history = useHistory();

  useEffect(() => {
    async function loadBlogs() {
      const response = await Axios.post(`${process.env.REACT_APP_PROXY}/blog`, { uid: match.params.id })
      setBlog(response.data.blog)
    }

    loadBlogs()
  }, [match.params.id])

  const onInputChange = (e: any) => {
    setBlog({
      ...blog, [e.target.name]: e.target.value
    } as Blog)
  }

  const onContentChange = (content: string) => {
    setBlog({
      ...blog, content
    } as Blog)
  }

  const onSubmitEdits = async (e: any) => {
    e.preventDefault()
    if (blog) {
      const currDate = new Date().toDateString()

      const response = await Axios.post(`${process.env.REACT_APP_PROXY}/update-blog`,
        { uid: match.params.id,
          author: blog.author,
          name: blog.name,
          date: currDate,
          content: blog.content
        } as Blog,{ withCredentials: true })

      // TODO: Indicate successful / unsuccessful updating
    }
  }

  const deleteBlog = async () => {
    const response = await Axios.post(`${process.env.REACT_APP_PROXY}/delete-blog`,
      { uid: match.params.id },{ withCredentials: true })
    if (response.data.success) {
      history.push('/blog-edit')
    }
  }

  return (
    <section className="blog-edit-container">
      { blog && <form className="blog-edit" onSubmit={onSubmitEdits}>
        <label>
          <input name="name" value={blog.name} placeholder='Blog Title' onChange={onInputChange}/>
        </label>
        <label>
          By <input name="author" value={blog.author} placeholder='Author' onChange={onInputChange}/>
        </label>
        <p>Updated last on {blog.date}</p>
        <div className="quill-container">
          <ReactQuill value={blog.content} onChange={onContentChange}/>
        </div>
        <button type="submit">Submit Changes</button>
      </form> }
      { blog && <button onClick={deleteBlog}>Delete</button> }
    </section>
  )
}

export default BlogEdit
