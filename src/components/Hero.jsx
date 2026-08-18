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
        <h2><u>Data Analyst | Python | SQL</u></h2>
        <p>
          I work with data using Python, SQL, Pandas, NumPy and Power BI to
            transform datasets into meaningful insights. With a background in
          AI and Machine Learning, I enjoy building data-driven solutions
          and exploring how data can solve real-world problems.
        </p>
      </motion.div> 

    </section>
  );
}