import  { createContext, useContext, useState } from "react";

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModelContext.Provider value={{ isOpen, toggleModel }}>
      {children}
    </ModelContext.Provider>
  );
};

export const useModel = () => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error("useModel must be used within a ModelProvider");
  }
  return context;
};
