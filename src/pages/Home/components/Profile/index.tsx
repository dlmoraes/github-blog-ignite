import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { BlogContext } from '../../../../context/BlogContext'
import { ProfileContainer, ProfileContent } from './styles'

export function Profile() {
  const { user } = useContext(BlogContext)

  return (
    <ProfileContainer>
      <img
        src={user.avatarUrl}
        alt="Imagem representando o Avatar escolhido pelo usuário"
      />
      <ProfileContent>
        <header>
          <span>{user.name}</span>
          <a href={user.htmlUrl} target="_blank" rel="noreferrer">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>{user.bio}</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{user.company || 'Não informado'}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user.following} seguidores</span>
          </li>
        </ul>
      </ProfileContent>
    </ProfileContainer>
  )
}
