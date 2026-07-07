const skills = [
  "React",
  "JavaScript",
  "HTML5 & CSS3",
  "Python",
  "FastAPI",
  "Machine Learning",
  "Git & GitHub",
  "REST APIs",
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="skills-title">🛠️ Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-badge glass" key={i}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
