import {motion} from 'framer-motion'
import {useState} from 'react'
const Model = () => {
   const [isOpen, setIsOpen] = useState(false)
   const toggle = () => {
        setIsOpen(!isOpen)
   }
  return (
    <motion.div
    className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[19rem] min-h-[7rem] p-2  bg-white z-50 shadow-md rounded-lg overflow-hidden'
    >

    </motion.div>
  )
}

export default Model