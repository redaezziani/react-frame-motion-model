import { AnimatePresence } from "framer-motion";
import "./App.css";
import Model from "./components/Model";
import { useModel, ModelProvider } from "./Contexts/ModelContext";

function App() {
  const { isOpen, toggleModel } = useModel(); 
  const title = "Simple Model"; 
  const type = "blur";//simple note if you dont want to use blur effect then use "none" to set mode default
  const content =
    "This is a simple model component made with react and framer-motion library to show how to use react with framer-motion.";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <button
        onClick={toggleModel}
        className="rounded-md text-white dark:text-slate-100 min-w-[5rem] bg-slate-800 px-3 py-[0.38rem]"
      >
        Open
      </button>
      <AnimatePresence>
        {isOpen && (
          <Model title={title} Open={isOpen} type={type} content={content} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <ModelProvider>
      <App />
    </ModelProvider>
  );
}

