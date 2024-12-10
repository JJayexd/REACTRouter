import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from './Components/Container/Container'
import { Header } from './Components/Header/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
