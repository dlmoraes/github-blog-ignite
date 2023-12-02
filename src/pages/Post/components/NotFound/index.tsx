import { NavLink } from 'react-router-dom'
import { NotFoundPostContainer } from './styles'

export function NotFound() {
  return (
    <NotFoundPostContainer>
      <h1>Não foram encontrados dados para esse post!</h1>
      <NavLink to="/">
        <button>Voltar</button>
      </NavLink>
    </NotFoundPostContainer>
  )
}
