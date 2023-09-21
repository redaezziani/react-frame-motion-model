import { AnimatePresence } from 'framer-motion'
import './App.css'
import Model from './components/Model'
function App() {

  const title='Simple Model'
  const content='This is a simple model component made with react and framer-motion library to show how to use react with framer-motion.'
  return (
    <div
    className='flex items-center justify-center min-h-screen bg-gray-200 relative'
    >
      <AnimatePresence>
      <Model title={title} content={content} />
      </AnimatePresence>
    </div>
  )
}

export default App
