import Lottie from 'lottie-react'
import { useContext } from 'react'
import animationData from '../../assets/lottie/loading_animation.json'
import { BlogContext } from '../../context/BlogContext'
import { LoadingContainer } from './styles'

export function Loading() {
  const { loadingData } = useContext(BlogContext)

  return (
    <>
      {loadingData ? (
        <LoadingContainer>
          <Lottie animationData={animationData} loop={true} />
        </LoadingContainer>
      ) : (
        <></>
      )}
    </>
  )
}
