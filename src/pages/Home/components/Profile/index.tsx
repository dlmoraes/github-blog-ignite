import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from 'react'
import { User } from '../../../../context/@interfaces'
import { api } from '../../../../lib/axios'
import { ProfileContainer, ProfileContent } from './styles'

export function Profile() {
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

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

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
