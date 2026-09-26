import { motion } from 'motion/react';

const paragraphs = [
  "I build mobile and web products that go live and stay live. Over 7+ years I've shipped 12 apps across e-commerce, travel, fintech, and government — including a weather forecasting platform for Iraq's national meteorological authority.",
  "My core stack is Flutter for cross-platform mobile, and Laravel/PHP with MySQL for backends, with React on the web and C#/.NET for business systems. I work directly with clients from requirements to store release, which means fewer handoffs and faster delivery.",
  "I'm now looking to join a team in Saudi Arabia, where I can contribute to the digital transformation driving Vision 2030. Fluent in Arabic and English.",
];

const About = () => {
  return (
    <section id="about" className="mx-auto px-6 py-24 flex flex-col gap-12">
      <h2 className="text-3xl font-bold container mx-auto text-center text-palete3">
        About
      </h2>
      <motion.div
        className="container mx-auto max-w-3xl flex flex-col gap-6"
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        variants={{ visible: { opacity: 1, y: 0, transition: { type: "spring" } }, hidden: { opacity: 0, y: 80 } }}
      >
        {paragraphs.map((text) => (
          <p key={text.slice(0, 20)} className="text-white text-lg md:text-xl leading-relaxed">
            {text}
          </p>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
