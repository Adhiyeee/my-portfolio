import { Typewriter } from "react-simple-typewriter";

export default function CodeScreen() {
  return (
    <section className="code-screen">

      {/* LEFT SIDE */}
      <div className="code-left">
        <h2 className="code-title">My Dev World 💻</h2>
        <p className="code-desc">
          I love building clean UI, smart systems and exploring ML 🚀
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="code-box">
        <h1>
        <Typewriter
        words={[
          "dev.skills = ['React', 'FastAPI', 'ML']",
          "dev.build('Modern UI')",
          "dev.learn('To be AI-Full Stack Developer')",
          "dev.create('Amazing Projects ')"
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={60}
        deleteSpeed={30}
        delaySpeed={1200}
      />
       </h1>
          </div>

        </section>
      );
    }