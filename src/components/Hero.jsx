import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero-main">

      {/* LEFT IMAGE */}
      <motion.img
  src="meee.jpeg"
  className="hero-img"
  initial={{ opacity: 0, x: -150 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2 }}
/>

<motion.div
  className="hero-text"
  initial={{ opacity: 0, x: 150 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, delay: 0.3 }}
>
        <h1>Hey, I'm Adithyan D </h1>
        <h2><u>AI-Full Stack Developer</u></h2>
        <p>
          I build interactive, clean and modern web applications with a touch of AI magic ✨.
          Currently learning Python while crafting AI-powered web solutions. Previously explored Machine Learning 🚀
        </p>
      </motion.div> 

    </section>
  );
}