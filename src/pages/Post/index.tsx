import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faChevronLeft,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { NavLink } from 'react-router-dom'
import { BlogContext } from '../../context/BlogContext'
import { NotFound } from './components/NotFound'
import {
  PostContainer,
  PostContent,
  PostHeaderContainer,
  PostHeaderContent,
} from './styles'

export function Post() {
  const { postSelected } = useContext(BlogContext)

  function LinkRenderer(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
      <a href={props.href} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    )
  }

  return (
    <PostContainer>
      {postSelected.id ? (
        <>
          <PostHeaderContainer>
            <PostHeaderContent>
              <header>
                <NavLink to="/">
                  <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
                </NavLink>
                <a
                  href="https://github.com/dlmoraes"
                  target="_blank"
                  rel="noreferrer"
                >
                  VER NO GITHUB
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </header>
              <h5>{postSelected.title}</h5>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faGithub} />
                  <span>{postSelected.user.login}</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>{postSelected.user.company || 'Não informado'}</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <span>32 seguidores</span>
                </li>
              </ul>
            </PostHeaderContent>
          </PostHeaderContainer>

          <PostContent>
            <ReactMarkdown components={{ a: LinkRenderer }}>
              {postSelected.body}
            </ReactMarkdown>
          </PostContent>
        </>
      ) : (
        <NotFound />
      )}
    </PostContainer>
  )
}
