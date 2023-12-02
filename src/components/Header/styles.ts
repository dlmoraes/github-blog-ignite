import styled from 'styled-components'
import headerImg from '../../assets/header-cover-img.svg'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background-image: url(${headerImg});
  background-size: cover;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 5rem;
  }
`
