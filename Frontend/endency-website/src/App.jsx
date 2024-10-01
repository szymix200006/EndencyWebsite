import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Features } from "./pages/Features"
import { OurTeam } from "./pages/OurTeam"
import { Documentation } from "./pages/Documentation"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Download } from "./pages/Download"
import { Login } from "./pages/Login"
import './styles/App.css'
import { Footer } from "./components/Footer"
import {Toaster} from 'sonner';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ScrollToTop from "./hooks/ScrollToTop"

const queryClient = new QueryClient()

const App = () => {
  
  return (
    <div className="app-container">
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" richColors/>
        <BrowserRouter>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='features' element={<Features/>}/>
            <Route path='ourteam' element={<OurTeam/>}/>
            <Route path='documentation' element={<Documentation/>}/>
            <Route path='download' element={<Download/>}/>
            <Route path='login' element={<Login/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App
