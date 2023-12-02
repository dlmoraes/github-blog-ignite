import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Post } from '../../context/@interfaces'
import { BlogContext } from '../../context/BlogContext'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import {
  HomeContainer,
  PostsContainer,
  PostsContent,
  PostsItem,
} from './styles'

export function Home() {
  const navigate = useNavigate()
  const { posts, handleSetPost } = useContext(BlogContext)

  const qtyTotal = posts.length

  const onClickPost = (post: Post) => {
    handleSetPost(post)
    navigate(`/posts/${post.id}`)
  }

  return (
    <HomeContainer>
      <Profile />

      <PostsContainer>
        <header>
          <span>Publicações</span>
          <span>{qtyTotal} publicações</span>
        </header>

        <SearchForm />

        <PostsContent>
          {posts.map((item) => {
            return (
              <PostsItem key={item.id} onClick={() => onClickPost(item)}>
                <header>
                  <h5>{item.title}</h5>
                  <span>
                    {formatDistanceToNow(new Date(item.createdAt), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </header>
                <p>{item.body}</p>
              </PostsItem>
            )
          })}
        </PostsContent>
      </PostsContainer>
    </HomeContainer>
  )
}
