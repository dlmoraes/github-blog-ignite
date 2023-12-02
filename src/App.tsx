import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { Loading } from './components/Loading'
import { BlogProvider } from './context/BlogContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <BlogProvider>
          <Loading />
          <Router />
        </BlogProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
