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
      const response = await Axios.post(`${process.env.REACT_APP_PROXY}/update-blog`,
        { uid: match.params.id,
          author: blog.author,
          name: blog.name,
          date: blog.date,
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
        <h2>{ blog.name }</h2>
        <label>
          By <input name="author" value={blog.author} onChange={onInputChange}/>
        </label>
        <label>
          Date: <input name="date" value={blog.date} onChange={onInputChange}/>
        </label>
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
