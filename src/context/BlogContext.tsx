import { createContext, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import {
  BlogContextType,
  BlogProviderProps,
  Post,
  PostResponse,
  User,
} from './@interfaces'

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [postSelected, setPostSelected] = useState<Post>({} as Post)
  const [loadingData, setLoadingData] = useState<boolean>(false)
  const [user, setUser] = useState<User>({} as User)

  const fetchUser = useCallback(async () => {
    const { data } = await api.get(`/users/dlmoraes`)
    const {
      name,
      login,
      avatar_url: avatarUrl,
      bio,
      company,
      following,
      html_url: htmlUrl,
    } = data

    setUser({
      name,
      login,
      avatarUrl,
      bio,
      company,
      following,
      htmlUrl,
    })
  }, [])

  const fetchPosts = useCallback(async (query?: string) => {
    setLoadingData((state) => {
      state = true
      return state
    })

    const q = query !== undefined ? query : ''
    const uri = `${q} repo:dlmoraes/github-blog-ignite`
    const queryString = '?q=' + encodeURIComponent(uri)

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

    setTimeout(() => {
      setLoadingData((state) => {
        state = false
        return state
      })
    }, 1000)
  }, [])

  useEffect(() => {
    fetchPosts()
    fetchUser()
  }, [fetchPosts, fetchUser])

  const handleSetPost = (post: Post) => {
    setPostSelected(post)
  }

  return (
    <BlogContext.Provider
      value={{
        posts,
        postSelected,
        user,
        loadingData,
        fetchPosts,
        handleSetPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
