import { motion } from "framer-motion";

const Card = ({ title, children }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-sm md:max-w-lg bg-white rounded-xl shadow-md flex flex-col items-center justify-around m-4">
          <div className="p-4 text-xl text-black font-circularBold text-center border-b-2 w-full">
            {title}
          </div>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
