import { Typewriter } from "react-simple-typewriter";

export default function CodeScreen() {
  return (
    <section className="code-screen">

      {/* LEFT SIDE */}
      <div className="code-left">
        <h2 className="code-title">My Data World 📊</h2>
        <p className="code-desc">
          I enjoy working with data, finding insights and building
          intelligent, data-driven solutions 🚀
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="code-box">
        <h1>
          <Typewriter
            words={[
              "data.skills = ['Python', 'SQL', 'Pandas']",
              "data.analyze('Real-World Data')",
              "data.visualize('Insights')",
              "data.build('Intelligent Solutions')"
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