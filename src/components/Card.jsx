import { motion } from "motion/react";

const Card = ({ children, className = "" }) => (
  <motion.div className={`${className} shadow`} initial={"hidden"}
    whileInView={"visible"}
    viewport={{ once: true }}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 24 },
    }}
    transition={{ duration: 0.5 }}>
    {children}
  </motion.div>
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
