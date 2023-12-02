import { ReactNode } from 'react'

export interface User {
  name: string
  login: string
  avatarUrl: string
  bio: string
  company: string
  following: number
  htmlUrl: string
}

export interface PostResponse {
  id: number
  title: string
  body: string
  created_at: string
  user: User
  html_url: string
}

export interface Post {
  id: number
  title: string
  body: string
  createdAt: string
  user: User
  htmlUrl: string
}

export interface BlogContextType {
  posts: Post[]
  postSelected: Post
  user: User
  loadingData: boolean
  fetchPosts: (query?: string) => Promise<void>
  handleSetPost: (post: Post) => void
}

export interface BlogProviderProps {
  children: ReactNode
}
