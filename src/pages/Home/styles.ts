import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 0 3rem 1rem;
`

export const PostsContainer = styled.div`
  margin-top: 4.5rem;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    span:first-child {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.6;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span:last-child {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const PostsContent = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

export const PostsItem = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-post']};
  height: 16.25rem;
  padding: 2rem;
  border-radius: 10px;
  max-width: 33rem;
  cursor: pointer;

  header {
    h5 {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.6;
      width: 60%;
    }

    span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  @media (max-width: 640px) {
    height: 15.25rem;

    header {
      max-width: 100%;
      display: flex;
      flex-direction: column;

      h5 {
        width: 100%;
      }
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
      -webkit-line-clamp: 2;
    }
  }
`
