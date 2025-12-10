import { Header } from './components/header/Header'
import { PageRouter } from './routes/PagesRouter'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './components/footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PageRouter />
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
