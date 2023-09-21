import { motion } from 'framer-motion';
import { useState } from 'react';

const Model = ({...props}) => {
  const {title, content } = props;
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: '-50%', x: '-50%' }}
      animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.5, y: '-50%', x: '-50%' }}
      exit={{ opacity: 0, scale: 0.5, y: '-50%', x: '-50%' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, duration: 0.5 }}
      className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[80%] max-w-[90%]  sm:min-w-[15rem] sm:max-w-[24rem] sm:min-h-[9rem] p-2 bg-white flex flex-col gap-3 justify-between items-start z-50 shadow-md rounded-lg overflow-hidden'
    >
        <p
        className=' font-semibold text-slate-800 '
        >
            {title}
        </p>
        <p
        className=' text-slate-500 text-sm'
        >
            {content}
        </p>
      <div className="w-full flex sm:mt-2 mt-4 justify-end gap-3 items-center">
      <button
          onClick={handleClose}
          className='rounded-md text-black min-w-[5rem] border-[1.6px] border-slate-800 px-3 py-[0.31rem]'
        >
          Close
        </button>
        <button
          className='rounded-md text-white min-w-[5rem] bg-slate-800 px-3 py-[0.38rem]'
        >
          Open
        </button>
      </div>
    </motion.div>
  );
};

export default Model;
