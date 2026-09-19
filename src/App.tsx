import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home   from './pages/Home'
import { LanguageProvider } from './context/LanguageContext'


function App() {


  return (
    <LanguageProvider>
      <Header/>
      <Home/>
      <Footer/>
    </LanguageProvider>
  )
}

export default App