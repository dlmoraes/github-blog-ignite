import { createContext, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import {
  BlogContextType,
  BlogProviderProps,
  Post,
  PostResponse,
} from './@interfaces'

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [postSelected, setPostSelected] = useState<Post>({} as Post)

  const fetchPosts = useCallback(async (query?: string) => {
    const q = query !== undefined ? query : ''
    const uri = `${q} repo:dlmoraes/github-blog-ignite`
    const queryString = '?q=' + encodeURIComponent(uri)
    console.log(queryString)

    const response = await api.get(`search/issues${queryString}`)

    const { items } = response.data
    const posts = items.map((item: PostResponse) => {
      const { id, title, body, created_at: createdAt, user } = item
      return {
        id,
        title,
        body,
        createdAt,
        user,
      }
    }) as Post[]

    setPosts(posts)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const handleSetPost = (post: Post) => {
    setPostSelected(post)
    console.log(post)
  }

  return (
    <BlogContext.Provider
      value={{
        posts,
        postSelected,
        fetchPosts,
        handleSetPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
