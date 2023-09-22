import { useEffect, useState } from "react";
import { motion, progress, useAnimation } from "framer-motion";
import { AiOutlineCloudUpload } from "react-icons/ai";

const UploadInput = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const controls = useAnimation();

  const handleFile = (file) => {
    if (file) {
      const reader = new FileReader();

      reader.onloadstart = () => {
        console.log("start");
      };

      reader.onprogress = (e) => {
        const progress = (e.loaded / e.total) * 100;
        setUploadProgress(progress);
      };

      reader.onloadend = () => {
        console.log("end");
      };

      reader.onload = () => {
        console.log(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    handleFile(file);
  }, [file]);

  const handleInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  useEffect(() => {
    controls.start({ width: `${uploadProgress}%` });
    console.log(uploadProgress);
  }, [uploadProgress, controls]);

  return (
    <motion.div
      layoutId="upload"

      className={`relative h-1 w-[20rem] overflow-hidden border ${
        file
          ? "rounded-lg bg-white transition-all ease-in-out duration-500 border-slate-300 border-2"
          : "bg-white border-gray-200 border-2 rounded-lg min-h-[10rem]"
      } flex justify-center items-center`}
    >
      {file ? (
        <motion.div
          transition={{ duration: uploadProgress, ease: "easeInOut" }}
          className=" w-12  h-full bg-sky-700 transition-all ease-in-out duration-500"
        ></motion.div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <AiOutlineCloudUpload className="w-16 h-16 text-slate-300" />
          <p className="text-sm text-gray-500">Upload a file</p>
        </div>
      )}

    {
        file ?       <input
        name="file"
        type="file"
        className="absolute hidden w-full h-full opacity-0 cursor-pointer"
        id="file"
        onChange={handleInputChange}
      />:      <input
      name="file"
      type="file"
      className="absolute w-full h-full opacity-0 cursor-pointer"
      id="file"
      onChange={handleInputChange}
    />
    }
      <label
        className="w-full cursor-pointer h-full absolute flex justify-center items-center z-50"
        htmlFor="file"
      ></label>
    </motion.div>
  );
};

export default UploadInput;
