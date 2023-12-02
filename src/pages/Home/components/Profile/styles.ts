import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;

  width: 100%;
  min-height: 212px;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  padding: 2.5rem 2rem;
  margin-top: -5.75rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 1rem;
    }
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme['base-title']};
      line-height: 1.3;
      font-size: 1.5rem;
      font-weight: 700;
    }

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

  p {
    line-height: 1.6;
    font-size: 1rem;
  }

  ul {
    margin-top: 1rem;
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
    gap: 0.8rem;

    header {
      position: relative;

      a {
        position: absolute;
        right: 0;
        top: -13.5rem;
      }
    }

    ul {
      flex-direction: column;
      gap: 1rem;
    }
  }
`
