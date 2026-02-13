import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

function App() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
