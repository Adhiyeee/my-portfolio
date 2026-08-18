const skills = [
  "SQL",
  "Python",
  "Pandas",
  "Power BI",
  "Data Visualization",
  "Data Analysis",
  "Machine Learning",
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
