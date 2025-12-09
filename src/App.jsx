import { Header } from './components/header/Header'
import { PageRouter } from './routes/PagesRouter'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PageRouter />
      </BrowserRouter>
    </>
  )
}

export default App
