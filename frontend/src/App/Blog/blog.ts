export interface BlogList {
  blogs: [Blog]
}

export interface Blog {
  uid: string,
  name: string,
  author: string,
  date: string,
  content: string
}
