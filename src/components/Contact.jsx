import { MdEmail, MdLocationPin, MdPhone, MdPin } from "react-icons/md";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24 bg-primary">
      <h2 className="text-3xl font-bold  mb-6 w-3/5 mx-auto text-center text-palete3">
        Contact
      </h2>
      <div className="flex flex-row w-3/5 mx-auto">
        <div className="w-1/2 flex flex-col gap-2">
          <p className="text-palete4 flex flex-row gap-2 items-center">
            <MdEmail /> mohanadkaradamour@gmail.com{" "}
          </p>
          <p className="text-palete4 flex flex-row gap-2 items-center">
            <MdPhone />
            +963967304021
          </p>
          <p className="text-palete4 flex flex-row gap-2 items-center">
            <MdLocationPin />
            Syria, Aleppo
          </p>
          <div className="flex flex-row gap-2">
            <a href="https://github.com/mkaradamour"><FaGithub size={32} className="text-palete4"/></a>
            <a href="https://www.linkedin.com/in/mohanad-karadamour-aa550711a/"><FaLinkedin size={32} className="text-palete4"/></a>
            <a href="https://wa.me/963967304021"><FaWhatsapp size={32} className="text-palete4"/></a>
          </div>
        </div>
        <div className="w-1/2 flex flex-wrap flex-row gap-2">
          <div className="flex-1">
            <input
              type="text"
              className="w-full text-palete1 p-2"
              placeholder="Name"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              className="w-full text-palete1 p-2"
              placeholder="Email"
            />
          </div>

          <textarea
            name="text"
            id="text"
            cols="30"
            rows="5"
            className="w-full text-palete1 p-2"
            placeholder="Message"
          />
          <div className="flex flex-row justify-end w-full">
            <Button className="bg-palete3 text-palete5">Send</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
