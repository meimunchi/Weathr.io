import React from 'react'
import { RouteComponentProps } from 'react-router'

interface BlogParams {
  name: string
}

interface BlogPageProps extends RouteComponentProps<BlogParams>{
}

function BlogPage({ match }: BlogPageProps) {

  return (
    <div>{ match.params.name }</div>
  )
}

export default BlogPage
