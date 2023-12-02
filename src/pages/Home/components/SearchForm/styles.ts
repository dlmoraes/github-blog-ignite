import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;

  input {
    width: 100%;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    height: 50px;
    padding: 1rem 0.75rem;
    color: ${(props) => props.theme.white};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-size: 1rem;
      line-height: 1.6;
    }

    &:hover {
      border-color: ${(props) => props.theme.blue};
      transition: border-color 0.8s;

      &::placeholder {
        font-weight: 600;
      }
    }
  }
`
