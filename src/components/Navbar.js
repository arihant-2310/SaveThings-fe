import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper purple accent-4">
          <motion.a
            href="/"
            className="left brand-logo"
            style={{ marginLeft: "10px" }}
            initial={{ y: -250 }}
            animate={{ y: -2 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            SaveThings
          </motion.a>

          <ul className="right">
            <motion.li>
              <motion.a
                href="/create"
                className="waves-effect waves-light btn-small #b388ff deep-purple accent-1"
                style={{ borderRadius: "5px" }}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                }}
              >
                <span className="nav-button">Create</span>
                <i className="material-icons right">add</i>
              </motion.a>
            </motion.li>
            <li>
              <motion.a
                href="/find"
                className="waves-effect waves-light btn-small #b388ff deep-purple accent-1"
                style={{
                  borderRadius: "5px",
                  marginLeft: "1px",
                }}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                }}
              >
                <span className="nav-button">Find</span>
                <i className="material-icons right">search</i>
              </motion.a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
