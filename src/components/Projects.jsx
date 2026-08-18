import Tilt from "react-parallax-tilt";

const projects = [
  {
    name: "AI-Agriculture Advisory System",
    desc: "Smart system to suggest crops based on location and data.",
    github: "https://github.com/Adhiyeee/AI-agriculture-advisory-system", // change if needed
    
    img: "project1.webp"
  },
  {
    name: "AI Video Dubbing",
    desc: "AI system to translate and dub videos automatically.",
    github: "https://github.com/Adhiyeee/ai-video-dubbing",
    
    img: "project4.jpeg"
  },
  {
    name: "Portfolio Website",
    desc: "My personal portfolio.",
    github: "https://adhiyeee.github.io/my-portfolio/",
    
    img: "project2.jpeg" // or use a new image like portfolio.jpeg
  }
  
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="project-title">🚀 My Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          
          <Tilt
            key={i}
            glareEnable={true}
            glareMaxOpacity={0.3}
            scale={1.05}
          >
            <div className="project-card glass">

              <div className="project-img-container">
                <img src={p.img} className="project-img" />

                {/* HOVER OVERLAY */}
                <div className="overlay">
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <button className="btn">GitHub</button>
                  </a>

                  
                </div>
              </div>

              <h3>{p.name}</h3>
              <p>{p.desc}</p>

            </div>
          </Tilt>

        ))}
      </div>
    </section>
  );
}