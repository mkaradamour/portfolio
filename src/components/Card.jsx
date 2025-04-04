import { motion } from "motion/react";

const Card = ({ children, className }) => (
    <motion.div className={`rounded-xl bg-gray-800 shadow ${className}`} initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );

  const CardContent = ({ children }) => <div>{children}</div>;

  export { Card, CardContent };