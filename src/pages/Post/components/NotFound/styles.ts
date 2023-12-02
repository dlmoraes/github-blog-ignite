import styled from 'styled-components'

export const NotFoundPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;

  button {
    background-color: ${(props) => props.theme['base-post']};
    border: 0;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme.white};
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-profile']};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['base-profile']};
    }
  }
`
