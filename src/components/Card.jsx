import { motion } from "motion/react";

const Card = ({ children, className }) => (
  <motion.div className={`${className} rounded-xl bg-gray-800 shadow `} initial={"hidden"}
    whileInView={"visible"}
    variants={{
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0 },
    }}
    transition={{ duration: 0.5 }}>
    {children}
  </motion.div>
  // <div className={`rounded-xl bg-gray-800 shadow ${className}`}>
  //   {children}
  // </div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const CardHeader = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-xl font-semibold text-white">
    {children}
  </h3>
);

export { Card, CardContent, CardHeader, CardTitle };