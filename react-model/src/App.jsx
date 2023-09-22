import { AnimatePresence } from "framer-motion";
import "./App.css";
//import Model from "./components/Model";
//import Notification from "./components/Notification";
import UploadInput from "./components/Upload";
import { useModel, ModelProvider } from "./Contexts/ModelContext";


function App() {
  const { isOpen, toggleModel } = useModel(); 
  //const title = "Simple Model"; 
  //const type = "blur";//simple note if you dont want to use blur effect then use "none" to set mode default
  //const NotifacationType="";
  //const content ="this is a simple model component that you can use in your project like a notification or a simple model.";
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      {/*<button
        onClick={toggleModel}
        className="rounded-md text-white dark:text-slate-100 min-w-[5rem] bg-slate-800 px-3 py-[0.38rem]"
      >
        Open
      </button>*/}
      <AnimatePresence>
        <UploadInput />
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

