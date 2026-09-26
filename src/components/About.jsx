import { motion } from 'motion/react';
import { useT } from '../i18n';

const About = () => {
  const { t } = useT();
  return (
    <section id="about" className="mx-auto px-6 py-24 flex flex-col gap-12">
      <h2 className="text-3xl font-bold container mx-auto text-center text-palete3">
        {t("about.title")}
      </h2>
      <motion.div
        className="container mx-auto max-w-3xl flex flex-col gap-6"
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        variants={{ visible: { opacity: 1, y: 0, transition: { type: "spring" } }, hidden: { opacity: 0, y: 80 } }}
      >
        {t("about.paragraphs").map((text) => (
          <p key={text.slice(0, 20)} className="text-white text-lg md:text-xl leading-relaxed">
            {text}
          </p>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
