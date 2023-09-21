import { motion } from "framer-motion";
import { useModel } from "../Contexts/ModelContext";
import PropTypes from 'prop-types';
//lets make a type check for our model
Model.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  type: PropTypes.string,
};
const Model = ({ title, content, type = "default" }) => {
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
      className={`fixed top-1/2 left-1/2 ${
        type === "blur"
          ? "backdrop-filter bg-white/40 dark:bg-black/40 backdrop-blur-sm"
          : "dark:bg-slate-900/90 dark:text-white/90 bg-white "
      } ${isOpen ? "flex" : "hidden"}
       transform -translate-x-1/2 -translate-y-1/2 min-w-[80%] max-w-[90%]  sm:min-w-[15rem] sm:max-w-[24rem] sm:min-h-[9rem] p-2   flex-col gap-3 justify-between items-start z-50 shadow-md rounded-lg overflow-hidden`}
    >
      <p
        className={`font-semibold text-slate-800 ${
          type === "blur" ? "dark:text-slate-100" : "dark:text-slate-100"
        } `}
      >
        {title}
      </p>
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
          className="rounded-md text-black min-w-[5rem] dark:text-slate-700 dark:border-slate-700 border-[1.6px] border-slate-800 px-3 py-[0.31rem]"
        >
          Close
        </button>
        <button className="rounded-md text-white dark:text-slate-100 min-w-[5rem] bg-slate-800 px-3 py-[0.38rem]">
          Open
        </button>
      </div>
    </motion.div>
  );
};

export default Model;
