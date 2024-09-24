import Header from './Components/Header'
import './App.css'
import { Outlet } from 'react-router-dom'
import ThemWrapper from './Context/themeContext'

const App = () => {
  return (
    <ThemWrapper>
      <Header />
      <Outlet />
    </ThemWrapper>
  )
}
export default App