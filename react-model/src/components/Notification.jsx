import { motion } from 'framer-motion'
import {IoWarningOutline} from 'react-icons/io5'
import { useModel } from "../Contexts/ModelContext";

const Notification = ({ title, content, type = "error"}) => {
  const { isOpen, toggleModel } = useModel();
  const handleClose = () => {
    toggleModel();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: "-50%", x: "-50%" }}
      animate={{
        opacity: isOpen ? 1 : 0,
        scale: isOpen ? 1 : 0.5,
        y: "-50%",
        x: "-50%",
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5,
      }}
      className={`fixed top-1/2 left-1/2  dark:bg-slate-900/90 dark:text-white/90 bg-white  ${isOpen ? "flex" : "hidden"} transform -translate-x-1/2 -translate-y-1/2 min-w-[80%] max-w-[90%]  sm:min-w-[15rem] sm:max-w-[24rem] min-h-[14rem] sm:min-h-[9rem] p-5 sm:p-3   flex-col gap-3 justify-between items-start z-50 shadow-md rounded-lg overflow-hidden`}
    >
        <div className="flex flex-col sm:flex-row gap-2 w-full  sm:items-center sm:justify-start items-center justify-center
        
        ">
            <IoWarningOutline className="text-red-800/70 text-3xl"/>
            <p
            className='font-semibold text-slate-500 dark:text-slate-100'
            >
              {title}
            </p>
        </div>
      <p
        className={`  text-sm ${
          type === "blur"
            ? "dark:text-slate-100 text-slate-700"
            : "dark:text-slate-100 text-slate-500"
        } `}
      >
        {content}
      </p>
      <div className="w-full flex sm:mt-2 mt-4 justify-end gap-3 items-center">
        <button
          onClick={handleClose}
          className={`rounded-md w-full md:w-fit  sm:min-w-[5rem] ${!type==='error' ? ' bg-emerald-500/40 backdrop-blur-sm text-emerald-600': 'bg-red-500/40 text-red-800 backdrop-blur-sm'}    px-3 py-2`}
        >
          Confirme
        </button>
      </div>
    </motion.div>
    );
}

export default Notification