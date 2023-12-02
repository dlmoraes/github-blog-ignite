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
import {
  PostContainer,
  PostContent,
  PostHeaderContainer,
  PostHeaderContent,
} from './styles'

const loremIpsumText = `Programming languages all have built-in data structures, but these
often differ from one language to another. This article attempts
to list the built-in data structures available in JavaScript and
what properties they have. These can be used to build other data
structures. Wherever possible, comparisons with other languages
are drawn. Dynamic typing JavaScript is a loosely typed and
dynamic language. Variables in JavaScript are not directly
associated with any particular value type, and any variable can be
assigned (and re-assigned) values of all types: let foo = 42; //
foo is now a number foo = 'bar'; // foo is now a string foo =
true; // foo is now a boolean`

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
          {loremIpsumText}
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
