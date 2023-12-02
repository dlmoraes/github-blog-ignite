import styled from 'styled-components'

export const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999999999;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme['base-background']};
    opacity: 0.98;
  }
`
