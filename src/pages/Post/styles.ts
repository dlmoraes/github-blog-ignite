import styled from 'styled-components'

export const PostContainer = styled.div`
  padding: 0 1.5rem 3rem;
`

export const PostHeaderContainer = styled.div`
  width: 100%;
  min-height: 168px;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  margin-top: -5.75rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  gap: 2rem;
`

export const PostHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;

      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      font-size: 0.75rem;
      line-height: 1.6;
      font-weight: 700;
    }
  }

  h5 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
    width: 53%;
  }

  ul {
    margin-top: 0.5;
    list-style: none;
    display: flex;
    gap: 1.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['base-label']};
      }

      span {
        color: ${(props) => props.theme['base-subtitle']};
        line-height: 1.6;
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 640px) {
    header {
      margin-bottom: 1rem;
    }

    h5 {
      width: 100%;
    }

    ul {
      display: flex;
      flex-direction: column;
    }
  }
`

export const PostContent = styled.div`
  margin-top: 2.5rem;

  div {
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 2px;
    background: ${(props) => props.theme['base-post']};
  }
`
