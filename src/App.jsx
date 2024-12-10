import { Container } from './Components/Container/Container'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { AppRouter } from './Components/AppRouter/AppRouter'

function App() {
  return (
    <>
      <Container>
        <Header />
        <Main>
          <AppRouter />
        </Main>
      </Container>
    </>
  )
}

export default App
