import React from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";
const Home = () => {
  return (
    <motion.div
      className="home-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 3 }}
    >
      <h1 className="home-text">
        <span className="blinking">Oh, hi there!</span>
      </h1>
      <Loader />
    </motion.div>
  );
};

export default Home;
